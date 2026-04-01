import os
import glob

html_files = glob.glob('/Users/sriramreddy/Desktop/lirx-website/*.html')
for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    if '<button class="mobile-menu-toggle">' not in content:
        # Insert the button right before <nav class="main-nav"
        content = content.replace('<nav class="main-nav"', '<button class="mobile-menu-toggle"><i class="ph ph-list"></i></button>\n                <nav class="main-nav"')
        
        with open(f, 'w') as file:
            file.write(content)
print("Updated all HTML files with mobile menu toggle.")
