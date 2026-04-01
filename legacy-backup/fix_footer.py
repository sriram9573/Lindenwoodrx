import glob

html_files = glob.glob('/Users/sriramreddy/Desktop/lirx-website/*.html')
for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Replace the inline sizing that breaks CSS Grid bounds
    content = content.replace(
        '<div class="footer-col" style="flex: 2; min-width: 300px;">',
        '<div class="footer-col brand-col">'
    )
    
    # Remove manual max-width constraint on the paragraph inside it
    content = content.replace(
        '<p style="color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; max-width: 300px;">',
        '<p style="color: rgba(255,255,255,0.7); margin-bottom: 1.5rem;">'
    )
    
    with open(f, 'w') as file:
        file.write(content)

print("Footer inline styles stripped successfully.")
