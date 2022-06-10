Feature: Centrum.sk mailbox sign in, send message and sign out

    This feature demonstrates scenarios of a user signing into his mailbox,
    sending a message to a contact and signing out of the mailbox

    Scenario: Signing into centrum.sk mailbox, sending a message and signing off

        Given user starts at "https://user.centrum.sk/" page
        When user enters username in the username field
        And enters password in the password field
        And clicks an orange button below named "Prihlásiť"
        Then user should be signed in
        And button "Napísať správu" should be available

        When user clicks button "Napísať správu"
        And populates Komu: field with "testing01@centrum.sk"
        And populates Predmet: field with "Testing subject"
        And populates Body of the message with "Test message"
        And clicks button "Odoslať"
        Then message with subject "Testing subject" is sent and found in Odoslané folder

        When user clicks hyperlink "Odhlásiť" in the top right corner
        Then user is signed out and redirected to "https://www.centrum.sk/"
        And button "Prihlásiť" is available