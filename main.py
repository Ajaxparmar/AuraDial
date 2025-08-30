import imaplib
import email
from email.header import decode_header

# Gmail IMAP settings
IMAP_SERVER = 'imap.gmail.com'
EMAIL_ADDRESS = 'ajaxparmar@gmail.com'  # Replace with your Gmail address
APP_PASSWORD = 'Krishana@Diwani'     # Replace with your App Password

def connect_to_gmail():
    """Connect to Gmail IMAP server."""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER)
        mail.login(EMAIL_ADDRESS, APP_PASSWORD)
        mail.select('INBOX')
        return mail
    except Exception as e:
        print(f"Error connecting to Gmail: {e}")
        return None

def decode_email_subject(subject):
    """Decode email subject."""
    decoded_subject = decode_header(subject)[0][0]
    if isinstance(decoded_subject, bytes):
        try:
            return decoded_subject.decode()
        except:
            return decoded_subject.decode('utf-8', errors='ignore')
    return decoded_subject

def get_email_body(msg):
    """Extract email body (text/plain or text/html)."""
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == 'text/plain':
                return part.get_payload(decode=True).decode('utf-8', errors='ignore')
            elif part.get_content_type() == 'text/html':
                return part.get_payload(decode=True).decode('utf-8', errors='ignore')
    else:
        return msg.get_payload(decode=True).decode('utf-8', errors='ignore')
    return "No body content found."

def search_emails(mail):
    """Search for emails from Internshala Trainings."""
    try:
        # Search for emails from Internshala
        result, data = mail.search(None, 'FROM "no-reply@internshala.com"')
        email_ids = data[0].split()
        return email_ids
    except Exception as e:
        print(f"Error searching emails: {e}")
        return []

def main():
    # Connect to Gmail
    mail = connect_to_gmail()
    if not mail:
        return

    # Search for emails
    email_ids = search_emails(mail)
    if not email_ids:
        print("No emails found from Internshala Trainings.")
        mail.logout()
        return

    print("Emails from Internshala Trainings:")
    for email_id in email_ids[:5]:  # Limit to 5 emails for brevity
        try:
            # Fetch email by ID
            result, data = mail.fetch(email_id, '(RFC822)')
            raw_email = data[0][1]
            msg = email.message_from_bytes(raw_email)

            # Get subject
            subject = decode_email_subject(msg['subject'])
            # Get body (first 200 characters for brevity)
            body = get_email_body(msg)[:200]

            print(f"\nSubject: {subject}")
            print(f"Body (snippet): {body}...")
            print("-" * 50)
        except Exception as e:
            print(f"Error processing email ID {email_id}: {e}")

    # Logout
    mail.logout()

if __name__ == '__main__':
    main()