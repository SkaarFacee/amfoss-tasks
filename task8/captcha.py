try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract
img = Image.open("capture.png")
pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
flag = list(pytesseract.image_to_string(Image.open('capture.png')))
if "+" in flag:
    print(int(flag[0]) + int(flag[2]))
else :
    print('Not addition')
