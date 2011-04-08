jQuery.placeholder
==================

jQuery.palceholder is a jQuery plugin that allows you to set a placeholder text for your inputs. It mimics the HTML5
'placeholder' attribute.

Using jQuery.palceholder
------------------------

Just call placeholder() on the input in which you want a placeholder text loaded.

    <input id="input" type="text" placeholder="default value" />
    <script type="text/javascript" charset="utf-8">   
        $('#input').inputDV();
    </script>

The plugin will first look if the browser has an implementation of the placeholder attribute. If it doesn't
then will make some javascript wizardy to emulate it.

