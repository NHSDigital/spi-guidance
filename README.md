# spi-guidance

# NHS Components Demo

## Buttons
{% button "Submit" %}
{% button "Cancel", "secondary" %}

## Links
{% link "/home", "Go Home" %}
{% link "/about", "Learn More", "primary" %}

## Input
{% input "text", "Enter your name" %}
{% input "email", "Enter your email" %}

## Checkbox
{% checkbox "Accept terms and conditions" %}
{% checkbox "Subscribe to newsletter" %}

## Accordion
{% accordion "More Info", "This content is hidden until you expand the section." %}
{% accordion "Details", "Additional details go here." %}

# Example Pagination

{{ pagination({
  previousUrl: "#",
  previousPage: "Treatments",
  nextUrl: "#",
  nextPage: "Symptoms"
}) }}

