export const InputDetails =
{
    "ActionDispalyName": "Login",
    "Attributes": [
        {
            "Name": "Username",
            "Size": "10",
            "Type": "TextBox"
        },
        {
            "Name": "Password",
            "Size": "10",
            "Type": "SecretTextBox"
        },
        {
            "DropdownValues": [
                {
                    "DisplayName": "Guest",
                    "Value": "guest"
                },
                {
                    "DisplayName": "Admin",
                    "Value": "admin"
                }
            ],
            "Name": "UserType",
            "Type": "Dropdown"
        }
    ]
}