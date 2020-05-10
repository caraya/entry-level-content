#!/usr/bin/env bash

# 1. Rebuild the print stylesheet
gulp sass

# 2. Build the pm templates
gulp buildPDF

# 3. Copy the PDF to its final location
gulp copyPDF
