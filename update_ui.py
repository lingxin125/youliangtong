import os
import glob
import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Update Hero Card background gradient and add glow element
    old_hero = '<div class="rounded-2xl p-4 mt-3" style="background:linear-gradient(135deg,#11A64A 0%,#2EBD5E 100%);border:1px solid rgba(255,255,255,0.15);box-shadow:0 8px 24px rgba(17,166,74,0.20),0 4px 8px rgba(17,166,74,0.10);">'
    new_hero = '<div class="rounded-2xl p-4 mt-3 relative overflow-hidden" style="background:linear-gradient(135deg,#11A64A 0%,#0a7532 100%);border:1px solid rgba(255,255,255,0.15);box-shadow:0 8px 24px rgba(17,166,74,0.20),0 4px 8px rgba(17,166,74,0.10);">\n            <!-- 液态黄光晕修饰 -->\n            <div class="absolute -right-4 -bottom-6 w-32 h-32 bg-[#F59E0B] opacity-20 rounded-full blur-2xl pointer-events-none"></div>'
    content = content.replace(old_hero, new_hero)

    # 2. Update rounded corners
    # Change rounded-xl to rounded-2xl (but don't mess up if it's already 2xl)
    content = content.replace('rounded-xl', 'rounded-2xl')

    # 3. Update status tags: px-1.5 py-0.5 rounded -> px-2 py-0.5 rounded-full
    content = content.replace('bg-red-50 text-red-500 px-1.5 py-0.5 rounded', 'bg-red-50 text-red-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-green-50 text-green-600 px-1.5 py-0.5 rounded', 'bg-green-50 text-green-600 px-2 py-0.5 rounded-full')
    content = content.replace('bg-green-50 text-green-500 px-1.5 py-0.5 rounded', 'bg-green-50 text-green-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded', 'bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full')
    content = content.replace('bg-amber-50 text-amber-500 px-1.5 py-0.5 rounded', 'bg-amber-50 text-amber-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-violet-50 text-violet-500 px-1.5 py-0.5 rounded', 'bg-violet-50 text-violet-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-orange-50 text-orange-500 px-1.5 py-0.5 rounded', 'bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded', 'bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded', 'bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full')
    content = content.replace('bg-gray-50 px-1.5 py-0.5 rounded', 'bg-gray-50 px-2 py-0.5 rounded-full')
    
    # specific for tags with absolute positioning
    content = content.replace('bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium absolute', 'bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium absolute')
    content = content.replace('bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium absolute', 'bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium absolute')

    # also replace the dynamically generated ones in JS:
    content = content.replace("' px-1.5 py-0.5 rounded font-medium'", "' px-2 py-0.5 rounded-full font-medium'")
    content = content.replace("' px-1.5 py-0.5 rounded'", "' px-2 py-0.5 rounded-full'")
    content = content.replace('px-1.5 py-0.5 rounded', 'px-2 py-0.5 rounded-full')
    
    # 4. Input styles in <style> blocks
    old_input_css = 'background: #F9FAFB;\n            border: 1px solid #E5E7EB;'
    new_input_css = 'background: #F3F4F6;\n            border: 1px solid transparent;'
    content = content.replace(old_input_css, new_input_css)

    # Make button active state feel better (if tailwind classes exist)
    # Most buttons have `active:scale-[0.98]`, let's leave it as is.
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

if __name__ == '__main__':
    files = glob.glob('/Users/lingxin/working/收粮农产品/prototype/buyer-*.html') + glob.glob('/Users/lingxin/working/收粮农产品/prototype/farmer-*.html')
    for f in files:
        update_file(f)
    print("Done updating HTML files.")
