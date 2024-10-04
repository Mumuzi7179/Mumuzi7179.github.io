"use strict";(self.webpackChunkmu_website=self.webpackChunkmu_website||[]).push([[4121],{50865:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>A,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(74848),s=r(28453);const l={},t=void 0,c={id:"Blog/CTFWP/DeadSecCTF2024",title:"DeadSecCTF2024",description:"DK\u76fe\u4e91\u670d\u52a1\u5668",source:"@site/docs/Blog/07-CTFWP/04-DeadSecCTF2024.md",sourceDirName:"Blog/07-CTFWP",slug:"/Blog/CTFWP/DeadSecCTF2024",permalink:"/docs/Blog/CTFWP/DeadSecCTF2024",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blog/07-CTFWP/04-DeadSecCTF2024.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"Blog",previous:{title:"DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",permalink:"/docs/Blog/CTFWP/DASCTF2024\u6691\u671f\u6311\u6218\u8d5b"}},a={},d=[{value:"Misc",id:"misc",level:2},{value:"Welcome",id:"welcome",level:3},{value:"Mic check",id:"mic-check",level:3},{value:"flag_injection",id:"flag_injection",level:3},{value:"GoLParty",id:"golparty",level:3},{value:"MAN in the middle",id:"man-in-the-middle",level:3},{value:"Forgotten Password",id:"forgotten-password",level:3},{value:"Crypto",id:"crypto",level:2},{value:"Flag killer",id:"flag-killer",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.dkdun.cn/aff/RDTTPTUI",children:"DK\u76fe\u4e91\u670d\u52a1\u5668"})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u8fd1\u6d3b\u52a8\uff1a\uff08\u7eed\u8d39\u540c\u4ef7\uff09"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240729182734687",src:r(80032).A+"",width:"1555",height:"531"})}),"\n",(0,i.jsx)(n.p,{children:"2024-7-28"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsx)(n.h3,{id:"welcome",children:"Welcome"}),"\n",(0,i.jsx)(n.p,{children:"\u8fdbdiscord\u7fa4\u7b7e\u5230\u5373\u53ef"}),"\n",(0,i.jsx)(n.h3,{id:"mic-check",children:"Mic check"}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u662f\u4ed6\u8bf4\u4ec0\u4e48\u5c31\u91cd\u590d\u4ec0\u4e48\u5373\u53ef"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from pwn import *\r\ncontext.log_level=\"debug\"\r\np = remote('34.121.62.108',31646)\r\n\r\nfor i in range(1, 101):\r\n    response = p.recvuntil(b'submit test words > ').decode()\r\n    word = response.split('>')[1].split('[')[0].strip()\r\n    p.sendline(word.encode())\r\np.recv()\r\np.recv()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"flag_injection",children:"flag_injection"}),"\n",(0,i.jsx)(n.p,{children:"\u9898\u76ee\u662f\u8fd9\u6837\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from string import ascii_lowercase\r\nfrom time import sleep\r\nfrom os import getenv\r\n\r\nALPHABET     = set(ascii_lowercase + "_")\r\nSECRET_FLAG  = getenv("FLAG", "DEAD{test_flag_which_is_exactly_this_long}")\r\nSECRET_FLAG  = SECRET_FLAG.replace("{", "_").replace("}", "_").replace("DEAD","dead")\r\n\r\nassert len(SECRET_FLAG) == 42, "Bad flag length"\r\nassert set(SECRET_FLAG).issubset(ALPHABET), "Bad flag chars"\r\n\r\ndef get_flag():\r\n    print(SECRET_FLAG)\r\n\r\ndef split_flag():\r\n    start_offset = int(input("Start of flag substring: "))\r\n    end_offset   = int(input("End of flag substring: "))\r\n    new_flag     = SECRET_FLAG[start_offset:end_offset]\r\n    assert       len(new_flag) >= 13, "Can\'t have such a small piece"\r\n    anything     = input("Anything to add? Tell me: ").strip()[:20]\r\n    assert       set(anything).issubset(ALPHABET), "That\'s a crazy thing to add!"\r\n    new_flag     += anything\r\n    globals()[new_flag] = ":)"\r\n\r\nif __name__ == "__main__":\r\n    split_flag()\r\n    what_to_do = input("What should I do now? Tell: ")\r\n    if not set(what_to_do).issubset(ALPHABET):\r\n        print("Plz no hack :(")\r\n    else:\r\n        # No brute force for you. Test locally instead!\r\n        sleep(10)\r\n        print(eval(what_to_do))\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5f04\u4e86\u597d\u4e00\u4f1a\uff0c\u5728\u672c\u5730\u90fd\u4e0d\u77e5\u9053\u600e\u4e48\u5f04\uff0c\u6bd5\u7adf\u53ea\u80fd\u7528\u5c0f\u5199\u548c\u4e0b\u5212\u7ebf\uff0c\u6ca1\u5f97\u62ec\u53f7\u53ef\u4ee5\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u7a81\u7136\u53d1\u73b0\u4f1a\u8fd9\u6837\uff0c\u4e0a\u5348\u5728\u672c\u5730\u6d4b\u7684\u65f6\u5019\u4e5f\u9047\u5230\u4e86\uff0c\u4f46\u662f\u6ca1\u60f3\u5230"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240727135045853",src:r(54132).A+"",width:"988",height:"290"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e8e\u662f\u4e4e\u5c1d\u8bd5\u8ba9\u4ed6\u81ea\u5df1\u8bf4\u51faflag"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240727135104449",src:r(15525).A+"",width:"1567",height:"308"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"dead_ivswjlv"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240727135219639",src:r(77389).A+"",width:"1212",height:"279"})}),"\n",(0,i.jsx)(n.p,{children:"\u770b\u6765\u592a\u957f\u4e86\u662f\u4e0d\u884c\u7684"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240727135405377",src:r(32265).A+"",width:"1553",height:"278"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u4e00\u76f4\u8fd9\u6837\u4e0b\u53bb\u5c31\u884c\u4e86"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u540e\u62fc\u63a5\uff0c\u5f97\u5230",(0,i.jsx)(n.code,{children:"dead_ivswjlvahxmifksxjgifrzfhljkdprcaubac_"}),"\uff0c\u7136\u540e\u4e0b\u5212\u7ebf\u6362\u6210\u62ec\u5f27\uff0cdead\u7684\u5927\u5c0f\u5199\u8f6c\u6362\u4e00\u4e0b"]}),"\n",(0,i.jsx)(n.p,{children:"\u9a8c\u8bc1\u4e00\u4e0b"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240727140045602",src:r(63604).A+"",width:"974",height:"150"})}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\u5f97\u5230flag\u4e3a",(0,i.jsx)(n.code,{children:"DEAD{ivswjlvahxmifksxjgifrzfhljkdprcaubac}"})]}),"\n",(0,i.jsx)(n.h3,{id:"golparty",children:"GoLParty"}),"\n",(0,i.jsxs)(n.p,{children:["\u751f\u547d\u6e38\u620f\uff0c\u8981\u8fde\u7eed\u7b54\u5bf9\u9898\u76ee\uff0c\u6211\u7528\u8fd9\u4e2a\u4fee\u6539\u7684\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/thomas-broethaler/conways-game-of-life/blob/master/conways_game_of_life.ipynb",children:"https://github.com/thomas-broethaler/conways-game-of-life/blob/master/conways_game_of_life.ipynb"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u8981\u6ce8\u610f\u7684\u70b9\u4e3b\u8981\u5c31\u662f\u63a5\u6536\u6574\u4e2a\u60c5\u51b5\u4e86"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from pwn import *\r\nimport numpy as np\r\nfrom copy import deepcopy\r\n\r\n\r\nclass GameOfLife:\r\n\r\n    def __init__(self, cells=[], generations=1):\r\n        self.cells = cells.copy()\r\n        self.generations = generations\r\n        self.dim_y = len(cells)\r\n        self.dim_x = len(cells[0])\r\n        self.cur_dim_y = 0\r\n        self.cur_dim_x = 0\r\n\r\n    def get_neighbors(self, y, x):\r\n        neighbor_list = []\r\n        for i in range(y - 1, y + 2):\r\n            if i < 0 or i > (self.cur_dim_y - 1):\r\n                continue\r\n            else:\r\n                for j in range(x - 1, x + 2):\r\n                    if j < 0 or j > (self.cur_dim_x - 1):\r\n                        continue\r\n                    elif i == y and j == x:\r\n                        continue\r\n                    else:\r\n                        neighbor_list.append(self.cells[i][j])\r\n        return neighbor_list\r\n\r\n    def check_neighbors(self, cur_cell, neighbor_list):\r\n        next_gen_cell = cur_cell\r\n        alive_count = neighbor_list.count(1)\r\n        if cur_cell == 1:\r\n            if alive_count == 2 or alive_count == 3:\r\n                next_gen_cell = 1\r\n            else:\r\n                next_gen_cell = 0\r\n        else:\r\n            if alive_count == 3:\r\n                next_gen_cell = 1\r\n        return next_gen_cell\r\n\r\n    def add_empty_boarder(self, cur_field, cur_dim_y, cur_dim_x):\r\n        new_field = np.zeros((cur_dim_y + 2, cur_dim_x + 2))\r\n        for y, row in enumerate(cur_field):\r\n            for x, cur_cell in enumerate(row):\r\n                new_field[y + 1, x + 1] = cur_cell\r\n        return new_field\r\n\r\n    def remove_empty_boarder(self, new_cells):\r\n        new_cells = np.array(new_cells)\r\n        removing = True\r\n        while removing == True:\r\n            if len(new_cells) == 0:\r\n                return [[]]\r\n            elif np.count_nonzero(new_cells[0]) == 0:\r\n                new_cells = np.delete(new_cells, 0, 0)\r\n            elif np.count_nonzero(new_cells[::-1][0]) == 0:\r\n                new_cells = np.delete(new_cells, -1, 0)\r\n            elif np.count_nonzero(new_cells.T[0]) == 0:\r\n                new_cells = np.delete(new_cells, 0, 1)\r\n            elif np.count_nonzero(new_cells.T[::-1][0]) == 0:\r\n                new_cells = np.delete(new_cells, -1, 1)\r\n            else:\r\n                removing = False\r\n        return new_cells\r\n\r\n    def evaluate_generations(self):\r\n        self.cells = deepcopy(self.add_empty_boarder(self.cells, self.dim_y, self.dim_x))\r\n        new_cells = deepcopy(self.cells)\r\n        for generation in range(0, self.generations):\r\n            self.cur_dim_y = len(self.cells)\r\n            self.cur_dim_x = len(self.cells[0])\r\n            new_cells = deepcopy(self.add_empty_boarder(new_cells, self.cur_dim_y, self.cur_dim_x))\r\n            self.cells = deepcopy(new_cells)\r\n            for y, row in enumerate(self.cells):\r\n                for x, cur_cell in enumerate(row):\r\n                    neighbor_list = self.get_neighbors(y, x)\r\n                    new_cells[y][x] = self.check_neighbors(cur_cell, neighbor_list)\r\n        new_cells = self.remove_empty_boarder(new_cells)\r\n        return new_cells.tolist()\r\n\r\n\r\ndef get_generation(cells, generations):\r\n    result = GameOfLife(cells=cells, generations=generations)\r\n    return result.evaluate_generations()\r\n\r\n\r\ncontext.log_level = \"debug\"\r\np = remote('34.44.175.226', 31532)\r\n\r\np.recvuntil(b'Game On :D')\r\n\r\ncorrect_count = 0\r\nfirst_time = True\r\nwhile correct_count < 10:\r\n    if first_time:\r\n        initial_grid = p.recvuntil(b'[*]').decode().split('\\n')[2:-2]\r\n        first_time = False\r\n    else:\r\n        initial_grid = p.recvuntil(b'[*]').decode().split('\\n')[:-2]\r\n\r\n    p.recvuntil(b' Enter the number of live cells after ')\r\n    generations = int(p.recvuntil(b' generations: ').decode().split(' ')[0])\r\n\r\n    def parse_grid(grid):\r\n        return [[1 if cell == '\u25a0' else 0 for cell in row] for row in grid]\r\n    print(len(initial_grid),initial_grid)\r\n\r\n    initial_grid_array = parse_grid(initial_grid)\r\n\r\n    result_grid = get_generation(initial_grid_array, generations)\r\n    live_cells_after_generations = sum(sum(row) for row in result_grid)\r\n\r\n    print(f\"Number of live cells after {generations} generations: {live_cells_after_generations}\")\r\n\r\n    p.sendline(str(int(live_cells_after_generations)).encode())\r\n\r\n    response = p.recvline()\r\n    print(response.decode())\r\n\r\n    if b'Correct!' in response:\r\n        correct_count += 1\r\n    else:\r\n        exit()\r\n\r\n    #b'[+] Correct!\\n'\r\n    #b'[*] Game Over! Thank you for playing.\\n'\r\n    #b'[+] Congratulations! Here is your flag: DEAD{GoL_P4rty_W4s_4_Fun_4nd_1ntr1gu1ng_G4m3}'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"man-in-the-middle",children:"MAN in the middle"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u9898\u5427\uff0c\u6628\u5929\u60f3\u4e86\u4e00\u5929\u90fd\u4e0d\u77e5\u9053\u600e\u4e48\u5904\u740601\u4e32\uff0c\u4eca\u5929\u521a\u8d77\u6765\u6643\u4e86\u4e00\u773c\u9898\u5c31\u60f3\u660e\u767d\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u62ff\u5230\u7684\u662f\u4e00\u4e2a\u97f3\u9891\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728095541156",src:r(67125).A+"",width:"940",height:"221"})}),"\n",(0,i.jsx)(n.p,{children:"\u653e\u5927\u770b\u80fd\u53d1\u73b0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728095600441",src:r(4278).A+"",width:"1776",height:"259"})}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\u5c1d\u8bd5\u76f4\u63a5\u53bb\u770b\u5341\u516d\u8fdb\u5236\uff0c\u53d1\u73b0\u53ea\u670932767\u548c-32767\u8fd9\u4e24\u79cd\u3002\u7136\u540e\u6bcf\u79cd\u957f\u5ea6\u662f44\u4e2a\u77ed\u6837\u672c\uff0c\u5199\u4e2a\u811a\u672c\u628a\u4ed6\u8f6c\u6362\u621001\u4e32"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def convert_waveform_to_binary(input_file, output_file):\r\n    with open(input_file, 'rb') as f:\r\n        data = f.read()\r\n\r\n    binary_data = []\r\n    for i in range(0, len(data), 88):\r\n        sample = data[i:i+88]\r\n        if sample == b'\\xFF\\x7F' * 44:\r\n            binary_data.append('1')\r\n        elif sample == b'\\x01\\x80' * 44:\r\n            binary_data.append('0')\r\n        else:\r\n            print(f\"Unexpected value: {sample[:8]}... (showing first 8 bytes)\")\r\n\r\n    binary_string = ''.join(binary_data)\r\n\r\n    with open(output_file, 'w') as f:\r\n        f.write(binary_string)\r\n\r\n    print(f\"Decoded binary data written to {output_file}\")\r\n\r\nconvert_waveform_to_binary('flag.data', 'binary_output.txt') #flag.data\u662fwav\u7684\u7eafdata\u6570\u636e\uff0c\u53bb\u6389\u4e86\u5f00\u5934\u90e8\u5206\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u523001\u4e32\u540e\uff0c\u9996\u5148\u4f1a\u53d1\u73b0\u4e0d\u662f\u76f4\u63a5\u80fd",(0,i.jsx)(n.code,{children:"from binary"}),"\u7684\uff0c\u731c\u6d4b\u662f\u4e00\u79cd\u6ce2\u5f62\u7f16\u7801\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u7ecf\u8fc7\u5c1d\u8bd5\u540e\u6ca1\u6709\u89e3\u51fa\u6765\uff0c\u7b2c\u4e8c\u5929\u624d\u53d1\u73b0\u662f\u5728\u8f6c\u6362\u7684\u65f6\u5019\u81ea\u5df1\u5f04\u9519\u4e86\uff0c\u5b9e\u9645\u4e0a\u5c31\u76f4\u63a5\u6309\u716701\u548c10\u66ff\u6362\u62101\u548c0\u5c31\u884c\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'with open(\'binary_output.txt\', \'r\') as file:\r\n    binary_str = file.readline().strip()\r\n\r\nconverted_str = ""\r\n\r\nfor i in range(0, len(binary_str), 2):\r\n    pair = binary_str[i:i + 2]\r\n    if pair == "10":\r\n        converted_str += "0"\r\n    elif pair == "01":\r\n        converted_str += "1"\r\n    else:\r\n        pass\r\n    \r\nprint(converted_str)\r\n#0110110101100001011011100110001101101000011001010111001101110100011001010111001000100000011001010110111001100011011011110110010001101001011011100110011100100000011010010111001100100000011000010010000001101101011001010111010001101000011011110110010000100000011011110110011000100000011001010110111001100011011011110110010001101001011011100110011100100000011001000110100101100111011010010111010001100001011011000010000001100100011000010111010001100001001000000110100101101110001000000111011101101000011010010110001101101000001000000110010101100001011000110110100000100000011000100110100101110100001000000110111101100110001000000110010001100001011101000110000100100000011010010111001100100000011100100110010101110000011100100110010101110011011001010110111001110100011001010110010000100000011000100111100100100000011101000111011101101111001000000111011001101111011011000111010001100001011001110110010100100000011011000110010101110110011001010110110001110011001011000010000001100101011011100111001101110101011100100110100101101110011001110010000001100001001000000111010001110010011000010110111001110011011010010111010001101001011011110110111000100000011000010111010000100000011101000110100001100101001000000110110101101001011001000110010001101100011001010010000001101111011001100010000001100101011000010110001101101000001000000110001001101001011101000010000001110000011001010111001001101001011011110110010000101110001000000111010001101000011010010111001100100000011101000111001001100001011011100111001101101001011101000110100101101111011011100010000001110011011001010111001001110110011001010111001100100000011000010111001100100000011000100110111101110100011010000010000001100001001000000110001101101100011011110110001101101011001000000110000101101110011001000010000001100100011000010111010001100001001000000111001101101001011001110110111001100001011011000010110000100000011011010110000101101011011010010110111001100111001000000110100101110100001000000110100001101001011001110110100001101100011110010010000001100101011001100110011001100101011000110111010001101001011101100110010100100000011001100110111101110010001000000111001101111001011011100110001101101000011100100110111101101110011011110111010101110011001000000110001101101111011011010110110101110101011011100110100101100011011000010111010001101001011011110110111000101110001000000110010001100101011101100110010101101100011011110111000001100101011001000010000001100010011110010010000001100111001011100010000001100101001011100010000001110100011010000110111101101101011000010111001100101100001000000110110101100001011011100110001101101000011001010111001101110100011001010111001000100000011001010110111001100011011011110110010001101001011011100110011100100000011010010111001100100000011101110110100101100100011001010110110001111001001000000111010101110011011001010110010000100000011010010110111000100000011101100110000101110010011010010110111101110101011100110010000001100011011011110110110101101101011101010110111001101001011000110110000101110100011010010110111101101110001000000111000001110010011011110111010001101111011000110110111101101100011100110010110000100000011010010110111001100011011011000111010101100100011010010110111001100111001000000110010101110100011010000110010101110010011011100110010101110100001011100010000001101001011101000111001100100000011100000111001001101001011011010110000101110010011110010010000001100001011001000111011001100001011011100111010001100001011001110110010100100000011011000110100101100101011100110010000001101001011011100010000001101001011101000111001100100000011100100110111101100010011101010111001101110100011011100110010101110011011100110010000001100001011001110110000101101001011011100111001101110100001000000111010001101001011011010110100101101110011001110010000001100101011100100111001001101111011100100111001100100000011000010110111001100100001000000110010101100001011100110110010100100000011011110110011000100000011000110110110001101111011000110110101100100000011100100110010101100011011011110111011001100101011100100111100100101100001000000110000101110011001000000111010001101000011001010010000001110010011001010110011101110101011011000110000101110010001000000111010001110010011000010110111001110011011010010111010001101001011011110110111001110011001000000110010101101110011000010110001001101100011001010010000001110100011010000110010100100000011100100110010101100011011001010110100101110110011001010111001000100000011101000110111100100000011011010110000101101001011011100111010001100001011010010110111000100000011100110111100101101110011000110110100001110010011011110110111001101001011110100110000101110100011010010110111101101110001000000111011101101001011101000110100000100000011101000110100001100101001000000111010001110010011000010110111001110011011011010110100101110100011101000110010101110010001011100010000001100010011110010010000001100101011011010110001001100101011001000110010001101001011011100110011100100000011101000110100001100101001000000110001101101100011011110110001101101011001000000111001101101001011001110110111001100001011011000010000001110111011010010111010001101000011010010110111000100000011101000110100001100101001000000110010001100001011101000110000100100000011100110111010001110010011001010110000101101101001011000010000001101101011000010110111001100011011010000110010101110011011101000110010101110010001000000110010101101110011000110110111101100100011010010110111001100111001000000110110101101001011101000110100101100111011000010111010001100101011100110010000001110100011010000110010100100000011100100110100101110011011010110010000001101111011001100010000001110011011110010110111001100011011010000111001001101111011011100110100101111010011000010111010001101001011011110110111000100000011011000110111101110011011100110010110000100000011011010110000101101011011010010110111001100111001000000110100101110100001000000110000100100000011100100110010101101100011010010110000101100010011011000110010100100000011000110110100001101111011010010110001101100101001000000110011001101111011100100010000001101000011010010110011101101000001011010111001101110000011001010110010101100100001000000110010001101001011001110110100101110100011000010110110000100000011001000110000101110100011000010010000001110100011100100110000101101110011100110110110101101001011100110111001101101001011011110110111000101110001000000110000101101110011001000010000001101000011001010111001001100101001000000110100101110011001000000111100101101111011101010111001000100000011001100110110001100001011001110011101000100000011001000110010101100001011001000111101101101101001101000110111001100011011010000011001100110101001101110011001101110010010111110011010001011111001101110110100000110011010111110111011100110001011011100111110100100000011001110110111101101111011001000010000001101010011011110110001000100001\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u5230flag\uff1a",(0,i.jsx)(n.code,{children:"dead{m4nch3573r_4_7h3_w1n}"})]}),"\n",(0,i.jsx)(n.h3,{id:"forgotten-password",children:"Forgotten Password"}),"\n",(0,i.jsx)(n.p,{children:"\u9898\u76ee\u63cf\u8ff0\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"I was going to create this extremely easy forensics challenge for you, but accidentally used the flag as the password when I encrypted the archive. This flag is now deleted, and since it is not possible to brute-force it, I guess that means this challenge can no longer be solved, or can it?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7ed9\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u4e00\u4e2a\u52a0\u5bc6\u7684zip\uff0c\u4e00\u4e2apy\u6587\u4ef6\uff0c\u5185\u5bb9\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from io import BytesIO\r\nimport os\r\nimport subprocess\r\nimport pycdlib # pip install pycdlib\r\n\r\ntry:\r\n    FLAG = open("flag.txt","r").read()\r\nexcept FileNotFoundError:\r\n    FLAG = "fake_flag_for_testing"\r\n\r\niso = pycdlib.PyCdlib()\r\niso.new(interchange_level=4)\r\n\r\niso.add_fp(BytesIO(FLAG.encode()), len(FLAG), \'/flag.txt;1\')\r\n\r\niso.write(\'challenge.iso\')\r\niso.close()\r\n\r\nsubprocess.check_output(["zip", "challenge.zip", "challenge.iso", "-P", FLAG])\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u5b9e\u7ed9\u51fa\u8fd9\u4e2apy\u6587\u4ef6\u4e3b\u8981\u5c31\u662f\u751f\u6210iso"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u624b\u52a8\u4e5f\u751f\u6210\u4e24\u4e2aiso\uff0c\u5148\u5355\u72ec\u5bf9\u6bd4\u4e24\u4e2aiso\u7684\u533a\u522b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728161151685",src:r(9783).A+"",width:"1902",height:"517"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u540c\u70b9\u5728\u4e8e\u751f\u6210\u7684\u65f6\u95f4\uff0c\u4f46\u662f\u6bd4\u8d5b\u7684iso\u4e0d\u6e05\u695a\u65f6\u533a\uff0c\u6240\u4ee5\u6211\u5c31\u653e\u5f03\u53bb\u8fd8\u539f\u8fd9\u4e2a"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u7740\u7528zip\u538b\u7f29\u8fd9\u4fe9\u6587\u4ef6\uff0c\u5206\u522b\u5f97\u5230\u8fd9\u6837\u7684"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728161303028",src:r(96171).A+"",width:"1483",height:"625"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53d1\u73b0\u90fd\u670932\u5b57\u8282\u7684",(0,i.jsx)(n.code,{children:"\\x00"}),"\uff0c\u5176\u5b9e\u62ff\u5230\u9898\u7684\u65f6\u5019\u5c31\u60f3\u7528bkcrack\uff0c\u4f46\u662f\u6ce8\u610f\u5230",(0,i.jsx)(n.a,{href:"https://github.com/kimci86/bkcrack/blob/master/example/tutorial.md%E9%87%8C%E8%AF%B4%E7%9A%84",children:"https://github.com/kimci86/bkcrack/blob/master/example/tutorial.md\u91cc\u8bf4\u7684"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"The not so easy way: deflated file\r\nLet us assume the zip file did not contain the uncompressed spiral.svg.\r\n\r\nThen, to guess some plaintext, we can guess the first bytes of the original advice.jpg file from its extension. The problem is that this file is compressed. To run the attack, one would have to guess how those first bytes are compressed, which is difficult without knowing the entire file.\r\n\r\nIn this example, this approach is not practical. It can be practical if the original file can easily be found online, like a .dll file for example. Then, one would compress it using various compression software and compression levels to try and generate the correct plaintext.\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u5e38\u6765\u8bf4\u90fd\u662f\u5bf9\u50a8\u5b58\u7684\u8fdb\u884c\u660e\u6587\uff0c\u800c\u5bf9\u4e8e\u538b\u7f29\u7684\uff0c\u5f88\u96be\u53bb\u505a\uff0c\u901a\u5e38\u90fd\u662f\u6709\u5b8c\u5168\u76f8\u540c\u7684\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u770b\u5230\u6709\u76f8\u540c\u768432\u5b57\u8282\u768400\uff0c\u5c31\u5728\u601d\u8003\u662f\u5426\u53ef\u4ee5\u5c1d\u8bd5\u7528bkcrack\u53bb\u7206\u7834\u5462\uff0c\u7531\u4e8e\u8fd9\u4e2a00\u5b57\u8282\u867d\u7136\u662f32\uff0c\u4f46\u662f\u65e0\u6cd5\u5f97\u77e5\u662f\u5728\u4f55\u5904\u5f00\u59cb"}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136\u4e0d\u77e5\u9053\u4f55\u5904\u5f00\u59cb\uff0c\u4f46\u662f\u80fd\u89c2\u5bdf\u5230\u521b\u5efa\u7684\u4f8b\u5b50\u5f00\u5934\u7b2c\u4e00\u4e2a\u662f\u572861\u5904\uff0c\u7b2c\u4e8c\u662f\u572864\u5904\uff0c\u7531\u4e8e\u53ea\u9700\u898112\u4f4d\u5df2\u77e5\uff0c\u56e0\u6b64\u53ef\u4ee5\u6298\u4e2d\u9009\u62e9\u4e00\u4e2a\uff0c\u7136\u540e\u752816\u7684\u5927\u5c0f"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148",(0,i.jsx)(n.code,{children:"bkcrack -L challenge.zip"}),"\u770b\u770b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"bkcrack 1.7.0 - 2024-05-26\r\nArchive: .\\challenge.zip\r\nIndex Encryption Compression CRC32    Uncompressed  Packed size Name\r\n----- ---------- ----------- -------- ------------ ------------ ----------------\r\n    0 ZipCrypto  Deflate     17ee7183        53248          382 challenge.iso\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u63a5\u7740\u5c1d\u8bd5\u7834\u89e3",(0,i.jsx)(n.code,{children:".\\bkcrack.exe -C .\\challenge.zip -c challenge.iso -x 68 0000000000000000000000000000"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728163652211",src:r(42898).A+"",width:"1524",height:"279"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u5230key\u662f",(0,i.jsx)(n.code,{children:"6b13ebc5 cc0be8ac 709e18f9"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e",(0,i.jsx)(n.code,{children:".\\bkcrack.exe -C .\\challenge.zip -k 6b13ebc5 cc0be8ac 709e18f9 -D dec.zip"})]}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u538b\u540e\u76f4\u63a5\u641c\u7d22\u5373\u53ef"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240728163814175",src:r(21835).A+"",width:"887",height:"233"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DEAD{weird_how_this_encryption_is_the_default_in_2024}"})}),"\n",(0,i.jsx)(n.h2,{id:"crypto",children:"Crypto"}),"\n",(0,i.jsx)(n.h3,{id:"flag-killer",children:"Flag killer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from binascii import hexlify, unhexlify\r\n\r\ndef FLAG_KILLER(value):\r\n    index = 0\r\n    temp = []\r\n    output = 0\r\n    while value > 0:\r\n        temp.append(2 - (value % 4) if value % 2 != 0 else 0)\r\n        value = (value - temp[index]) // 2\r\n        index += 1\r\n    temp = temp[::-1]\r\n    for index in range(len(temp)):\r\n        output += temp[index] * 3 ** (len(temp) - index - 1)\r\n    return output\r\n\r\noutput = '0e98b103240e99c71e320dd330dd430de2629ce326a4a2b6b90cd201030926a090cfc5269f904f740cd1001c290cd10002900cd100ee59269a8269a026a4a2d05a269a82aa850d03a2b6b900883'\r\n\r\ndef reverse_FLAG_KILLER(output_segment):\r\n    for i in range(4096):\r\n        if FLAG_KILLER(i) == int(output_segment, 16):\r\n            return i\r\n    return None\r\n\r\nindex = 0\r\nreversed_flag = ''\r\nwhile index < len(output):\r\n    segment = output[index:index+5]\r\n    original_value = reverse_FLAG_KILLER(segment)\r\n    if original_value is None:\r\n        print(\"Error: No matching value found.\")\r\n        break\r\n    reversed_flag += '%03x' % original_value\r\n    index += 5\r\nprint(reversed_flag)\r\n#444541447b3236336638373165383830653964633764323430313030303330346663363065393863376335383807d \u6ce8\u610f07d\u6539\u62107d\r\n#--\x3eDEAD{263f871e880e9dc7d2401000304fc60e98c7c588}\n"})})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},54132:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240727135045853-81770c3fdab996b85942277f505a0f41.png"},15525:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240727135104449-611dd28f20218babde6975f11623f4c4.png"},77389:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240727135219639-8860faa7cea3376e88e3f74113fe3199.png"},32265:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240727135405377-d317d82cde3ee2eca707cb9affc88d05.png"},63604:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240727140045602-5f211d846f2df31c93d96734cab15774.png"},67125:(e,n,r)=>{r.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6wAAADdCAIAAAAwz2jqAAAPfUlEQVR4nO3deZCU5Z3A8afpBrnnNIGIRkx2i0MFEgMiQc2llvFASDQRFzIYK1thI6i7WbIgiOJRZkUw0YpRREhARQXxIFmNx2AQRVJccUQ3ggoEs5mBGRnkmBnYP15rihowItb0y/B8Pn893dXT9ZuH7vf9Cv22mR279oYQhg29YNFTT4QQunTp+tLLy7t2/Vz4h6bccN2NUybv++BFTz0xbOgFIYRH5z9+7rfP/8c/zubNfx008CubN/91/IRJE6697uB/cP99fu+9zaedesohPFW0pk+77be/nZ3NZseNG3/2Oee2a9fuY39k/20/5D/BCNVUV0+ePLF669Y1f179ibY9fMTLOzlenfvt8x+d/3hzDt6y7bt1X/rSlw/h+Lz/Pu9/5GdfjQeKMWOv6dOn76pVK399911nn3PuuHHj+/Ttd5BPYtsPQeMBOYTQp2+/MWOuDiFMnz61oaHhsstGjBl7zcE8SbLPXbt+bsnSV4XNITjkGknxDJtrvqeGw8327dsfenDOrFkzO3fqPLJs1JCLhqU9URQyrVoVFxfncrn27dpvq922ZUvVnj170h7qCLd+/bq5c36z/YPt551/Yf8Bp9bX1aU9URS6dz/hJ1deFUIYObKsZ6/effv227Zt20MPziksLCoru7z/gFPTHvDIN2DAwJFlo75/6WUhhEcembfoqScWLy4/yAjm02hyzEl7nIMlgonFlqqqF18sn3jt+M989rOjfnjFiBFlaU8Ui86dOyf/KT979sxpt9927YT/KikpHTz4jOKSkrRHO2K9XvHalBuuCyEMGHBq+/btX176UnJ/RcVrnQsKSopLevbqneqAR6aevXrf+vOp+968duJ1v1v05P0z7z3mmGNaUBm0XN/81lllZT9Me4oYNR5zysouP+usc9Ie52CJYKJQV1dXXv788Esvbtu27c0333r2OeemPVEU6urq6urqMplM27ZtM5nMiBFlpSWlw4Ze8L1LhvnnxWaVzWbbt28fQrj5phtCCA0NDcn9U264LpvNnn3OuXMfeDjN+Y5QDQ0Nu3btCiEcddRR2Ww27XGAjyGCicKMe+++7b9vLS09es4D8/r1+3La48Rixr133/2ru0pLj5774MNHH/2ZtMeJyKCvnr5k6fLGm4vL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"},4278:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240728095600441-055ac80fd50d9099323c8dacab1ab4a5.png"},9783:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240728161151685-c89cededdda42d7bb39538435dbe42dd.png"},96171:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240728161303028-446f4d9430f0ea3d7449ecfd81211d1b.png"},42898:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240728163652211-2f33a8c0e6cc4d5d111b3ad5965bf3de.png"},21835:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240728163814175-cb252db2c73e95b89f8806163a2997b2.png"},80032:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240729182734687-cf58cd2bcf63bb0f9f660ec591d9bf68.png"},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(96540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);