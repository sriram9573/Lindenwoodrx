from fpdf import FPDF

class LiRxPDF(FPDF):
    def header(self):
        self.set_font('helvetica', 'B', 15)
        self.cell(0, 10, 'LiRx Prescription Transfer System', border=False, ln=True, align='C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('helvetica', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def create_presentation_pdf():
    pdf = LiRxPDF()
    pdf.set_auto_page_break(auto=True, margin=15)

    # --- Page 1: Title & Overview ---
    pdf.add_page()
    pdf.set_font('helvetica', 'B', 24)
    pdf.ln(40)
    pdf.cell(0, 20, 'Project Overview: Automation Success', ln=True, align='C')
    pdf.set_font('helvetica', '', 14)
    pdf.ln(10)
    pdf.multi_cell(0, 10, 'This report documents the full-stack implementation of the LiRx automated prescription transfer system, ensuring seamless patient onboarding and real-time data synchronization.', align='C')

    # --- Page 2: Home Page Lead Capture ---
    pdf.add_page()
    pdf.set_font('helvetica', 'B', 18)
    pdf.cell(0, 10, 'Step 1: Homepage Lead Capture', ln=True)
    pdf.set_font('helvetica', '', 12)
    pdf.multi_cell(0, 10, 'We integrated a "Quick Transfer" form on the homepage to capture high-conversion leads with zero friction.')
    pdf.ln(5)
    img_path = '/Users/sriramreddy/.gemini/antigravity/brain/ebc96b10-003c-4939-a728-e952174be706/presentation_home_form_1775360448214.png'
    pdf.image(img_path, x=15, w=180)

    # --- Page 3: Detailed Data Intake ---
    pdf.add_page()
    pdf.set_font('helvetica', 'B', 18)
    pdf.cell(0, 10, 'Step 2: Comprehensive Transfer Form', ln=True)
    pdf.set_font('helvetica', '', 12)
    pdf.multi_cell(0, 10, 'A dedicated, secure intake form captures in-depth patient and pharmacy information, including medication lists and Rx numbers.')
    pdf.ln(5)
    img_path = '/Users/sriramreddy/.gemini/antigravity/brain/ebc96b10-003c-4939-a728-e952174be706/presentation_transfer_form_1775360459111.png'
    pdf.image(img_path, x=20, w=170)

    # --- Page 4: Reliable Success Reporting ---
    pdf.add_page()
    pdf.set_font('helvetica', 'B', 18)
    pdf.cell(0, 10, 'Step 3: Verified Success Feedback', ln=True)
    pdf.set_font('helvetica', '', 12)
    pdf.multi_cell(0, 10, 'The server-side proxy ensures that every patient sees a professional success confirmation, bypassing browser-level security blocks.')
    pdf.ln(10)
    img_path = '/Users/sriramreddy/.gemini/antigravity/brain/ebc96b10-003c-4939-a728-e952174be706/presentation_success_msg_final_capture_1775360850564.png'
    pdf.image(img_path, x=15, w=180)

    # --- Page 5: Automated Data Logging ---
    pdf.add_page()
    pdf.set_font('helvetica', 'B', 18)
    pdf.cell(0, 10, 'Result: Automated Spreadsheet Logs', ln=True)
    pdf.set_font('helvetica', '', 12)
    pdf.multi_cell(0, 10, 'Patient data is automatically appended to the central Google Sheet within seconds, eliminating manual transcription.')
    pdf.ln(10)
    img_path = '/Users/sriramreddy/.gemini/antigravity/brain/ebc96b10-003c-4939-a728-e952174be706/presentation_google_sheet_1775360664566.png'
    pdf.image(img_path, x=10, w=190)

    # --- Save PDF ---
    output_path = '/Users/sriramreddy/Desktop/LiRx_Prescription_Transfer_Presentation.pdf'
    pdf.output(output_path)
    print(f"Presentation saved successfully at {output_path}")

if __name__ == "__main__":
    create_presentation_pdf()
