Feature: Centrum.sk mailbox sign in and sign out

    This feature demonstrates scenarios of a user signing into his mailbox
    and signing out of the mailbox

    Scenario: Signing into centrum.sk mailbox and signing off

        Given user starts at "https://user.centrum.sk/" page
        When user enters username in the username field
        And enters password in the password field
        And clicks an orange button below named "Prihlásiť"
        Then user should be signed in
        And button "Napísať správu" should be available

        When user clicks hyperlink "Odhlásiť" in the top right corner
        Then user is signed out and redirected to "https://www.centrum.sk/"
        And button "Prihlásiť" is available