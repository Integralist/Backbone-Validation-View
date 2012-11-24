define(['../Utils/Templating/hogan'], function (hogan) {
    
    var Validation = Backbone.View.extend({
        initialize: function(){
            // Self explanatory: stores all mandatory fields
            this.mandatory_fields = $('.js-mandatory-field');

            // This holds the template file we'll compile with data pulled from server
            this.template = null;

            // This holds the actual rendered template content
            this.template_content = null;

            // We'll go ahead and grab the error message template file (no point waiting until the last minute and making the user wait).
            this.get_template();
        },

        el: $('#js-form'),

        events: {
            'submit': 'validate'
        },

        get_template: function (callback) {
            $.ajax({
                url: 'Assets/Templates/FormErrors.txt',
                dataType: 'html',
                success: _.bind(function (tmp) {
                    this.template = hogan.compile(tmp);

                    if (callback) {
                        callback();
                    }
                }, this)
            });
        },

        validate: function(){
            var errors = [];
            var method;
            
            // Loop through all the fields checking for validation errors
            this.mandatory_fields.each(_.bind(function (index, item) {
                // First we check what the current field is and validate it against a specific method
                switch (item.name) {
                    case 'dob':
                        method = 'validate_date';
                        break;
                    case 'age':
                        method = 'validate_number';
                        break;
                    case 'email':
                        method = 'validate_email';
                        break;
                    case 'mobile':
                        method = 'validate_mobile';
                        break;
                    case 'password':
                        method = 'validate_password';
                        break;
                    case 'card':
                        method = 'validate_cardnumber';
                        break;
                    case 'proceed':
                        method = 'validate_checkbox';
                        break;
                    default:
                        method = 'validate_text';
                }

                if (this[method](item)) {
                    // Store just the messages and not the element itself (we only need the list of messages)
                    errors.push(item.getAttribute('data-message'));
                }
            }, this));

            // If there are any errors then display warning messsage to the user
            if (errors.length) {
                this.process_errors(errors);
                return false;
            } else {
                return true;
            }
        },

        validate_text: function (field) {
            /*
                If the length is zero (meaning the field is empty) then zero will coerce to false 
                so we return the opposite of that using the ! operator (so the first part of the following condition is met) 
                and if the length is greater than zero then the regex checks to see if the content isn't just empty spaces.

                If there was an error then we return true, if there wasn't an error then undefined will be returned (which coerces to false)
             */
            if (/^\s+$/.test(field.value) || !field.value.length) {
                return true;
            }
        },

        validate_number: function (field) {
            if (/^\D+/.test(field.value) || !field.value.length) {
                return true;
            }
        },

        validate_date: function (field) {
            /*
                The regex allows either double figure formats or singular...
                00/00/00
                0/0/0
             */
            if (!/^\d{1,2}\/\d{1,2}\/\d{1,2}$/.test(field.value) || !field.value.length) {
                return true;
            }
        },

        validate_email: function (field) {
            if (field.value.indexOf("@") === -1 || !field.value.length) {
                return true;
            }
        },

        validate_mobile: function (field) {
            /*
                The regex allows the following formats:
                    +44 07000000000
                    07000000000
                    +4407000000000
                
                So there is an optional +000 country code at the start (wrapped in a non-capturing group)
                We then allow for an optional space after the optional country code
                Finally we allow for 11 digits (no spaces - but we also strip out any spaces found before running the regex so the 'no spaces' thing doesn't really matter)
             */
            var strip_spaces = field.value.replace(' ', ''); // some people seem to add odd spacing when enterin numbers?
            if (!/^(?:\+\d{1,3})?\s?\d{11}$/.test(strip_spaces) || !field.value.length) {
                return true;
            }
        },

        validate_password: function (field) {
            /*
                The regex makes sure there is at least 8 alpha-numerical characters
                And that at least one of those values is a number
                And that at least one of those values is a text character
                We use a positive lookahead (which checks to see if a sub pattern matches a specific position)
                The lookahead checks for any character (zero or more times) is followed by a digit (e.g. making sure there is at least one digit)
                The lookahead then checks for any character (zero or more times) is followed by a text character (e.g. making sure there is at least one text character)
                Finally after the two lookaheads we have the standard regex which makes sure there is at least 8 alpha-numerical characters
             */
            if (!/^(?=.*\d)(?=.*[a-z])\w{8,}/i.test(field.value)) {
                return true;
            }
        },

        validate_cardnumber: function (field) {
            function luhn (cardnumber) {
                // Build an array with the digits in the card number
                var getdigits = /\d/g;
                var digits = [];
                var match;
                
                while (match = getdigits.exec(cardnumber)) {
                    digits.push(parseInt(match[0], 10));
                }
                
                // Run the Luhn algorithm on the array
                var sum = 0;
                var alt = false;
                
                for (var i = digits.length - 1; i >= 0; i--) {
                    // On every other number in the card sequence...
                    if (alt) {
                        digits[i] *= 2; // multiple the number by itself
                        
                        // If the number is now over 9 then we'll minus 9 from the number
                        if (digits[i] > 9) {
                            digits[i] -= 9;
                        }
                    }
                    
                    // Add this digit onto the current total sum
                    sum += digits[i];
                    
                    // Alternate
                    alt = !alt;
                }
                
                /*
                    The individual card numbers (after the above algorithm is applied and then when added together) 
                    should be possible to divide by 10 with zero left over
                 */
                if (sum % 10 == 0) {
                    return true;
                } else {
                    return false;
                }
            }
            
            // The following regex was actually borrowed from The Regular Expression Cookbook (co-written by the regex legend @stevenlevithan)
            if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g.test(field.value)) {
                return true;
            } else {
                // If the card number appears to be valid we then run the Luhn test
                if (!luhn(field.value)) {
                    return true;
                }
            }
        },

        validate_checkbox: function (field) {
            if (!field.checked) {
                return true;
            }
        },

        process_errors: function (errors) {
            /*
                Clean the errors list so we only have unique data.
                This happens for things like the postcode validation (no point showing the postcode field error message twice)
             */
            var clean_list = _.unique(errors);

            // The list needs to be converted into an Object for Hogan.js to compile the data into its template
            var converted_list = $(clean_list).map(function (index, item) {
                return {
                    error: item
                };
            });

            // Spent far longer on this than I wanted to, but this is it: jQuery collection is not an Array and so needs to be converted to an Array for Hogan.js to compile it
            var final_list = jQuery.makeArray(converted_list);

            // If the template file has been stored already then we'll just proceed to render the content
            if (this.template) {
                this.display_errors({ errors: final_list });
            } 
            // Otherwise grab the template file and then render the content
            else {
                // Have to rebind the `this` value as otherwise it would be equal to the global object (Window)
                this.get_template(_.bind(function(){
                    this.display_errors({ errors: final_list });
                }, this));
            }
        },

        display_errors: function (data) {
            // First remove any errors that might already be on the page
            var existing_list = $('#js-formerrors');
            if (existing_list.length) {
                existing_list.remove();
            }
            
            // Render the data into the template
            this.template_content = this.template.render(data);
            
            // Insert the error messages into the page
            this.$el.prepend(this.template_content);

            /*
                Focus page to the error message element.
                Had issue with WebKit where it wouldn't reposition window to the named anchor unless we reset the hash back to nothing and then set it again to the named anchor
             */
            window.location.hash = '';
            window.location.hash = 'js-formerrors';
        }
    });

    new Validation();

});