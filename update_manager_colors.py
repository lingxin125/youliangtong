import os

files = [
    'manager-account.html',
    'manager-users.html',
    'manager-dashboard.html',
    'manager-user-detail.html'
]
base_dir = '/Users/lingxin/working/收粮农产品/prototype/'

for f in files:
    path = os.path.join(base_dir, f)
    if not os.path.exists(path):
        continue
        
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Replace background color
    content = content.replace('background: #F5F7FA;', 'background: #F7F8FA;')
    
    # Replace old primary green #11A64A with #13B15A
    content = content.replace('#11A64A', '#13B15A')
    # Also handle lowercase hex if any
    content = content.replace('#11a64a', '#13B15A')
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)
        
print("Successfully updated manager colors.")
