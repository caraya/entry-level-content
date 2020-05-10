#!/usr/bin/env bash

# Rebuild the print stylesheet
gulp sass
# Build the content
gulp
# Build the PDF
gulp build-pdf
# Copy PDF
gulp copy-pdf
