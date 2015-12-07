# ADC Backlink

This project is a custom Drupal module I wrote because we needed an easy way to swap out the URLs of partner sites. One that was
accessible to non-technical content editors.

The module creates a custom field that gets hooked up to custom entities, which represent templates. These templates have tokens in the form `[link:car-accident]`.

This code isn't very useful outside of the context of the site I built it for. I present it here as a sample of a custom Drupal module I've written.

## How it works

In order to work, this module requires custom entity types to exist in the Drupal site's database. 

The field it creates consists of a select list and a text area. The module grabs data from "backlink" entity types containing the template text and sticks it into
the select list. Once the user selects a template they want to use, the module's JavaScript takes over and places the text into the text area element. From there,
the user can edit the template in any way they want (without affecting the original template). Once the user hits "save" on the page they're working on, the module
looks up the URL corresponding to a partner's website (based on another page field relating to a geographic location) and substitutes it for the token when the
page renders for the end user.
