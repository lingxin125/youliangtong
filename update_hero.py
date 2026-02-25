import os
import glob
import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # We replace the previous yellow glow div with a new structure containing the wheat icon
    # Previous: <div class="absolute -right-4 -bottom-6 w-32 h-32 bg-[#F59E0B] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
    
    # New element: a large FontAwesome wheat icon rotated and partially transparent
    new_wheat_element = '''<!-- 农业麦穗视觉修饰 -->
            <i class="fas fa-wheat-awn absolute -right-6 -bottom-8 text-8xl text-amber-400 opacity-20 transform -rotate-15 pointer-events-none"></i>
            <!-- 底部细微暖黄反光 -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none"></div>'''
            
    content = content.replace(
        '<div class="absolute -right-4 -bottom-6 w-32 h-32 bg-[#F59E0B] opacity-20 rounded-full blur-2xl pointer-events-none"></div>',
        new_wheat_element
    )

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

if __name__ == '__main__':
    files = glob.glob('/Users/lingxin/working/收粮农产品/prototype/buyer-*.html') + glob.glob('/Users/lingxin/working/收粮农产品/prototype/farmer-*.html')
    for f in files:
        update_file(f)
    print("Done updating hero card HTML.")
