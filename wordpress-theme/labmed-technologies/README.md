# Labmed Technologies — WordPress theme

## Install

1. Zip the `labmed-technologies` folder (the zip must contain the folder itself).
2. WordPress admin → Appearance → Themes → Add New → Upload Theme → activate.

## Set up the pages

Create five pages and assign the page templates (Page → right sidebar → Template):

| Page title    | Slug       | Template            |
| ------------- | ---------- | ------------------- |
| Home          | home       | *(default)*         |
| About Us      | about      | Labmed — About      |
| All Products  | products   | Labmed — Products   |
| Services      | services   | Labmed — Services   |
| Contact Us    | contact    | Labmed — Contact    |

Then Settings → Reading → "Your homepage displays: A static page" → Homepage = **Home**.
The homepage design comes from `front-page.php`, so the Home page itself can stay empty.

## Menu

Appearance → Menus → create a menu with Home, About Us, All Products, Services, Contact Us and
assign it to the **Primary Menu** location. Without a menu the theme shows a sensible default.

## Contact details

Appearance → Customize → **Labmed Contact** — telephone, cell/WhatsApp, e-mail, office hours,
B-BBEE level and the Google Maps search query are all editable there.

## Enquiry form

The contact form posts to `admin-post.php` and e-mails the address set in the Customizer using
`wp_mail()`. On most hosts you should install an SMTP plugin so the mail is delivered reliably.

## Permalinks

Settings → Permalinks → choose "Post name" and save, so the category anchors and page URLs work.
