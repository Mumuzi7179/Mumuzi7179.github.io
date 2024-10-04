"use strict";(self.webpackChunkmu_website=self.webpackChunkmu_website||[]).push([[7181],{85149:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>A,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=r(74848),s=r(28453);const d={},a="DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",c={id:"Blog/CTFWP/DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",title:"DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",description:"2024-07-21",source:"@site/docs/Blog/07-CTFWP/03-DASCTF2024\u6691\u671f\u6311\u6218\u8d5b.md",sourceDirName:"Blog/07-CTFWP",slug:"/Blog/CTFWP/DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",permalink:"/docs/Blog/CTFWP/DASCTF2024\u6691\u671f\u6311\u6218\u8d5b",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blog/07-CTFWP/03-DASCTF2024\u6691\u671f\u6311\u6218\u8d5b.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"Blog",previous:{title:"WKCTF2024",permalink:"/docs/Blog/CTFWP/WKCTF2024"},next:{title:"DeadSecCTF2024",permalink:"/docs/Blog/CTFWP/DeadSecCTF2024"}},l={},o=[{value:"Misc",id:"misc",level:2},{value:"EZ_zip",id:"ez_zip",level:3},{value:"png_master",id:"png_master",level:3},{value:"*ServerMeM",id:"servermem",level:3},{value:"Reverse",id:"reverse",level:2},{value:"DosSnake",id:"dossnake",level:3},{value:"Crypto",id:"crypto",level:2},{value:"complex_enc",id:"complex_enc",level:3}];function t(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dasctf2024\u6691\u671f\u6311\u6218\u8d5b",children:"DASCTF2024\u6691\u671f\u6311\u6218\u8d5b"}),"\n",(0,i.jsx)(n.p,{children:"2024-07-21"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsx)(n.h3,{id:"ez_zip",children:"EZ_zip"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u662f\u6700\u5f00\u59cb\u7684flag\u6587\u4ef6\uff0c\u53d1\u73b0\u95ee\u9898\u51fa\u5728\u6587\u4ef6\u540d\u5927\u5c0f\uff0c\u8fd9\u4e24\u5904\u90fd\u6539\u62107\u5c31\u884c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720122249795",src:r(78302).A+"",width:"692",height:"591"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u4e00\u76f4\u5728\u60f3\u6ce8\u91ca\u91cc\u7684just a byte\u662f\u5565\u610f\u601d\uff0c\u4e00\u76f4\u60f3\u7684\u662f\u8ddfpassword\u6709\u5173\u3002\u4e00\u76f4\u7528\u7684\u662fzipfile\u6765\u7206\u7834\uff0c\u540e\u9762\u624d\u53d1\u73b0\u4e00\u4e2a\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"zipfile\u7206\u4e0d\u4e86\uff0c\u540c\u6837\u7684\u7206\u7834\u811a\u672c\uff0czipfile\u7206\u4e0d\u51fa\u6765\uff0c\u4f46\u662fpyzipper\u53ef\u4ee5\u7206\u3002\u7f16\u5199\u4e00\u4e2a\u7206\u7834\u811a\u672c\u5e76\u7edf\u8ba1\u5bc6\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pyzipper\r\n\r\ndef crack_zip(zip_file_path):\r\n    for i in range(256):\r\n        password = bytes([i])\r\n        try:\r\n            with pyzipper.AESZipFile(zip_file_path, 'r') as zip_ref:\r\n                zip_ref.extractall(pwd=password)\r\n                extracted_files = zip_ref.namelist()\r\n                if extracted_files:\r\n                    return password, extracted_files[0]\r\n        except:\r\n            continue\r\n    return None, None\r\n\r\ndef main():\r\n    current_zip = '320.zip'\r\n    all_passwords = ''\r\n\r\n    while current_zip:\r\n        print(f'Cracking {current_zip}...')\r\n        password, next_zip = crack_zip(current_zip)\r\n        if password:\r\n            all_passwords += password.hex()\r\n            current_zip = next_zip\r\n        else:\r\n            print(f'Failed to crack {current_zip}')\r\n            break\r\n\r\n    print(f'All passwords: {all_passwords}')\r\n\r\nif __name__ == \"__main__\":\r\n    main()\r\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u5230\u5bc6\u7801\u662f",(0,i.jsx)(n.code,{children:"11bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec611bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec6"}),"\u5e76\u4e14\u5f97\u5230\u4e00\u4e2aAES-ECB.txt"]}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u65f6\u80fd\u5f88\u660e\u663e\u89c2\u5bdf\u5230\u8fd9\u4e2a\u5bc6\u7801\u662f\u91cd\u590d\u7684",(0,i.jsx)(n.code,{children:"11bb99580c613a87c54e12480aa7ff8c798f71ad280f6ba69d4a4425225e4ec6"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u5f97\u5230AES\u7684\u5185\u5bb9\u662f",(0,i.jsx)(n.code,{children:"64ZpNmbv2Hg4Jj9bH8Kv6D3OBliD9hgyI3vZWfMDJs2TcEwVnBmH/zkBtPBE3g8e the key may be on your journey\uff1f"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u7528\u8fd9\u4e2a\u5bc6\u7801\u5f53aes\u7684\u5bc6\u7801\u4e0d\u5bf9\uff0c\u731c\u6d4b\u662f\u89e3\u538b\u987a\u5e8f\u662f\u4ece320--\x3e1\uff0c\u800c\u5bc6\u7801\u987a\u5e8f\u662f1--\x3e320\uff0c\u56e0\u6b64\u9700\u8981\u53cd\u8fc7\u6765"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"c64e5e2225444a9da66b0f28ad718f798cffa70a48124ec5873a610c5899bb11"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720222544200",src:r(66140).A+"",width:"1220",height:"475"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DASCTF{514755c6-8280-463c-8378-a29702fc88df}"})}),"\n",(0,i.jsx)(n.h3,{id:"png_master",children:"png_master"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.del,{children:"\u5567\uff0c\u505a\u4e86\u597d\u4e00\u4f1a\u5403\u5b8c\u996d\u624d\u53d1\u73b0\u4e0d\u53ea\u662f02"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e00\u6bb5\u76f4\u63a5\u5728\u56fe\u7247\u5c3e\uff0c\u89e3base64\uff0c",(0,i.jsx)(n.code,{children:"DASCTF{2fd9e9ff-e27"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720130424832",src:r(24094).A+"",width:"759",height:"261"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6bb5\u662f\u5728\u56fe\u7247\u91cc\uff0cLSB\u9690\u5199\uff0ccolumn\uff0c\u5728A\u4e0a\u9762\uff0c\u5168\u901a\u9053\uff0c",(0,i.jsx)(n.code,{children:"d-5405-c5f5-"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720130504507",src:r(83218).A+"",width:"448",height:"250"})}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e09\u6bb5\u662f\u5728\u591a\u51fa\u6765\u7684IDAT\u5757\u4e2d\uff0c\u5f88\u660e\u663e\u88ab\u9009\u4e2d\u7684\u5757\u662f\u591a\u51fa\u6765\u7684\u5757"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720130547065",src:r(17598).A+"",width:"254",height:"145"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u76f4\u63a5zlib\u89e3\u538b\u540e\uff0c\u5f97\u5230\u7684\u662f\u4e00\u4e2a\u957f\u5ea6750500\u7684\u539f\u59cb\u6570\u636e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720130625146",src:r(43655).A+"",width:"1757",height:"931"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53d1\u73b0filter\u7b2c\u4e00\u4e2a\u662f01\uff0c\u540e\u9762\u90fd\u662f02\uff0c\u5c31\u60f3\u7740\u76f4\u63a5\u770bdata\uff0c\u7ed3\u679c\u6ca1\u60f3\u5230\u8fd8\u670904\u4e4b\u7c7b\u7684\u3002\u6839\u636e\u5f00\u5934\u7684",(0,i.jsx)(n.code,{children:"01 80 80 80 00 00\u2026\u2026"}),"\u53ef\u4ee5\u731c\u51fa\u662fRGB\u7684\u56fe\u50cf\uff0c\u7136\u540e\u8ba1\u7b97\u9ad8\u5bbd\u53ef\u4ee5\u5217\u4e2a\u5f0f\u5b50\u3002\u6bcf\u884c\u5f00\u5934\u6709\u4e00\u4f4dfilter\uff0c\u76f8\u5f53\u4e8e\u56fe\u50cf\u7684\u6bcf\u4e00\u884c\u662f\u7531",(0,i.jsx)(n.code,{children:"1 filter + 3*width"}),"\u7ec4\u6210\u7684\uff0c\u6574\u4e2a\u6587\u4ef6\u662f\u7531",(0,i.jsx)(n.code,{children:"(1 filter + 3* width)*highth"}),"\u7ec4\u6210\u7684\uff0c\u5373",(0,i.jsx)(n.code,{children:"(1+3*w) * h == 750500"}),"\uff0c\u4e0d\u96be\u5f97\u51fa750500\u5206\u89e3\u51fa\u6765\u662f",(0,i.jsx)(n.code,{children:"750500 = 2^2 \xb7 5^3 \xb7 19 \xb7 79"}),"\uff0c\u7531\u4e8e\u5b58\u5728",(0,i.jsx)(n.code,{children:"(1+3*w)"}),"\uff0c\u6b63\u597d\u80fd\u53d1\u73b0",(0,i.jsx)(n.code,{children:"19 * 79 = 1501 = 500*3+1"}),"\uff0c\u800c",(0,i.jsx)(n.code,{children:"2^2 * 5^3 = 500"}),"\uff0c\u4e00\u4e0b\u53ef\u4ee5\u5f97\u5230\u957f\u5bbd\u5747\u662f500\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u5c31\u6709\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u505a\u6cd5\uff0c\u4f7f\u7528tweakpng\uff0c\u5220\u9664\u524d\u9762\u7684IDAT"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720131146878",src:r(94878).A+"",width:"1025",height:"120"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u4fee\u6539\u9ad8\u5bbd\u4e3a500\uff0ctruecolor\uff08RGB\uff09"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720131231811",src:r(99178).A+"",width:"1817",height:"245"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720131244368",src:r(30577).A+"",width:"653",height:"407"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u540e\u5f97\u5230flag\uff1a",(0,i.jsx)(n.code,{children:"DASCTF{2fd9e9ff-e27d-5405-c5f5-a19131f86216}"})]}),"\n",(0,i.jsx)(n.h3,{id:"servermem",children:"*ServerMeM"}),"\n",(0,i.jsx)(n.p,{children:"\u521a\u5f00\u59cb\u662f\u8fd9\u6837\u7684\uff08\u5728WSL\u91cc\u4ee5\u4e0b\u6211\u672a\u6210\u529f\uff09\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\u662f\u627e\u7248\u672c",(0,i.jsx)(n.code,{children:"python3 ~/volatility3/vol.py -f out.lime banners.Banners"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"0x6be001a0      Linux version 5.4.27 (root@localhost.localdomain) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)) #1 SMP Sun May 26 03:37:06 EDT 2024\r\n0x6ca73554      Linux version 5.4.27 (root@localhost.localdomain) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)) #1 SMP Sun May 26 03:37:06 EDT 2024\r\n0x6db8a060      Linux version 5.4.27 (root@localhost.localdomain) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)) #1 SMP Sun May 26 03:37:06 EDT 2024\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u4e0b\u8f7d\u6307\u5b9a\u7684\u7248\u672c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.4.27.tar.xz\r\ntar -xf linux-5.4.27.tar.xz\r\ncd linux-5.4.27\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5\u9700\u8981\u7f16\u8bd1\u7684\u5de5\u5177"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\r\nsudo apt-get install -y build-essential libssl-dev libelf-dev dwarfdump\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7f16\u8bd1\u5185\u6838"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"make olddefconfig\r\nmake -j$(nproc)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c1d\u8bd5\u751f\u6210",(0,i.jsx)(n.code,{children:"module.dwarf"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"dwarfdump -di vmlinux > module.dwarf\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u4e00\u76f4\u662f\u6ca1\u6709\u751f\u6210vmlinux\u6587\u4ef6\u3002\u63a5\u7740\u5c31\u5c1d\u8bd5\u53bb\u88c5\u4e2a\u865a\u62df\u673a\u7136\u540e\u518d\u7f16\u8bd1\u8fd9\u4e2a\u5185\u6838\uff0c\u53cd\u6b63\u95f2\u7740\u6ca1\u4e8b\u7136\u540e\u7f16\u4e86\u4e00\u4e2a\u5c0f\u65f6"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u5728\u7f16\u8bd1\u5b8c\u5185\u6838\u540e\u52a0\u4e86\u8fd9\u51e0\u6761"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo make modules_install\r\nsudo make install\r\nsudo update-grub\r\nsudo reboot\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u91cd\u542f\u540e\u770b\u4e00\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"uname -r\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b8c\u6574\u5b89\u88c5"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'sudo apt update\r\nsudo apt upgrade -y\r\nsudo apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev dwarfdump zip -y\r\nwget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.4.27.tar.xz\r\ntar -xvf linux-5.4.27.tar.xz\r\ncd linux-5.4.27\r\ncp /boot/config-$(uname -r) .config\r\nmake menuconfig\r\nmake -j$(nproc) CFLAGS_KERNEL="-g"\r\nsudo make modules_install\r\nsudo make install\r\nsudo update-grub\r\nsudo reboot\r\nuname -r\r\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u563b\u563b\uff0c\u865a\u62df\u673a\u91cc\u9762\u7684ubuntu\u51fa\u95ee\u9898\u4e86\uff0c\u91cd\u65b0\u5728\u4e0d\u7528\u7684\u670d\u52a1\u5668\u91cc\u5f04\uff0c\u65f6\u95f4\u6765\u4e0d\u53ca\u505a\u9898\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720174343213",src:r(78321).A+"",width:"750",height:"501"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720191712559",src:r(89677).A+"",width:"632",height:"296"})}),"\n",(0,i.jsx)(n.p,{children:"......\u4e0d\u505a\u4e86\uff0c\u603b\u4e4b\u6b65\u9aa4\u5c31\u662f\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["\u627e\u5185\u6838\u4fe1\u606f--\x3e\u81ea\u521b\u865a\u62df\u673a\u66f4\u6362\u5185\u6838--\x3e\u751f\u6210dwarf\u4e0esystem.map\u5236\u4f5cprofile--\x3e\u653e\u81f3vol\u7684plugins\u76ee\u5f55\u4e0b--\x3e\u4f7f\u7528\u8be5profile\u8fdb\u884c\u53d6\u8bc1\uff0c\u53ef\u4ee5\u770b\u770b\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,i.jsx)(n.a,{href:"https://r0fus0d.blog.ffffffff0x.com/post/memory-forensics/#linux-profile%EF%BC%8C%E9%A2%98%E7%9B%AE%E5%90%8E%E9%9D%A2%E7%9A%84%E5%86%85%E5%AE%B9%E5%B0%B1%E6%B2%A1%E5%8E%BB%E7%9C%8B%E4%BA%86%E3%80%82",children:"https://r0fus0d.blog.ffffffff0x.com/post/memory-forensics/#linux-profile\uff0c\u9898\u76ee\u540e\u9762\u7684\u5185\u5bb9\u5c31\u6ca1\u53bb\u770b\u4e86\u3002"})]}),"\n",(0,i.jsx)(n.h2,{id:"reverse",children:"Reverse"}),"\n",(0,i.jsx)(n.h3,{id:"dossnake",children:"DosSnake"}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f\u5230103D5\u4e2d\u7684\u8fd9\u4e00\u6bb5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-None",children:"seg002:0259 loc_105D9:\r\nseg002:0259                 mov     cx, 20h ; ' '\r\nseg002:025C                 lea     si, aDasctf+6\r\nseg002:0260                 lea     di, aDasctf\r\nseg002:0264\r\nseg002:0264 loc_105E4:\r\nseg002:0264                 mov     al, [si]\r\nseg002:0266                 xor     al, [di]\r\nseg002:0268                 mov     [si], al\r\nseg002:026A                 inc     si\r\nseg002:026B                 inc     di\r\nseg002:026C                 cmp     di, 32Ah\r\nseg002:0270                 jnz     short loc_105F6\r\nseg002:0272                 lea     di, aDasctf\r\nseg002:0276\r\nseg002:0276 loc_105F6:\r\nseg002:0276                 loop    loc_105E4\r\nseg002:0278                 lea     si, aDasctf+6\r\nseg002:027C\r\nseg002:027C loc_105FC:\r\nseg002:027C                 mov     al, [si]\r\nseg002:027E                 cmp     al, 0\r\nseg002:0280                 jz      short locret_10609\r\nseg002:0282                 mov     ah, 0Eh\r\nseg002:0284                 int     10h\r\nseg002:0286                 inc     si\r\nseg002:0287                 jmp     short loc_105FC\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u6ce8\u610f\u5230DASCTF\u90a3\u4e00\u6bb5\u7684\u503c",(0,i.jsx)(n.code,{children:"3F 09 63 34 32 13 2A 2F 2A 37 3C 23 00 2E 20 10 3A 27 2F 24 3A 30 75 67 65 3C"})]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0eDASCTF\u8fdb\u884c\u5f02\u6216\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720113926087",src:r(4622).A+"",width:"1338",height:"484"})}),"\n",(0,i.jsxs)(n.p,{children:["\u63d0\u4ea4",(0,i.jsx)(n.code,{children:"H0wfUnnytheDosSnakeis!!!"}),"\u5373\u53ef"]}),"\n",(0,i.jsx)(n.h2,{id:"crypto",children:"Crypto"}),"\n",(0,i.jsx)(n.h3,{id:"complex_enc",children:"complex_enc"}),"\n",(0,i.jsx)(n.p,{children:"\u95ee\u7684GPT"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from Crypto.Util.number import *\r\nimport ast\r\n\r\ndef read_output_file(file_path):\r\n    with open(file_path, 'r') as f:\r\n        content = f.read().strip().split('\\n')\r\n    c = int(content[0].strip())\r\n    key = ast.literal_eval(content[1].strip())\r\n    return c, key\r\n\r\ndef dec(c, key):\r\n    m = [0] * (len(key) - 1)\r\n    for i in range(len(key) - 1, 0, -1):\r\n        if c >= key[i]:\r\n            m[i - 1] = 1\r\n            c -= key[i]\r\n    return m\r\n\r\ndef bits_to_bytes(bits):\r\n    byte_list = [bits[i:i+8] for i in range(0, len(bits), 8)]\r\n    byte_values = [int(''.join(map(str, byte)), 2) for byte in byte_list]\r\n    return bytes(byte_values)\r\n\r\nif __name__ == \"__main__\":\r\n    c, key = read_output_file('output.txt')\r\n    m_bits = dec(c, key)\r\n    print(''.join(str(i) for i in m_bits))\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u53d1\u73b0\u6ca1\u6709\u5f00\u5934\u76840\uff0c\u624b\u52a8\u8865\u4e00\u4e2a0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240720114629794",src:r(27322).A+"",width:"1526",height:"485"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DASCTF{you_kn0w_b@ckpack_Crypt0?}"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.dkdun.cn/aff/RDTTPTUI",children:"DK\u76fe\u4e91\u670d\u52a1\u5668"})})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},4622:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720113926087-08c86786a93d67fecc735e56846ace13.png"},27322:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720114629794-f9abc991b1bae6492dbebee770c5838b.png"},78302:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720122249795-68b1b4e3391b997fee57224079a87bd9.png"},24094:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720130424832-7595d98fa8646271e4adb5bb1b42ea98.png"},83218:(e,n,r)=>{r.d(n,{A:()=>i});const i="data:image/png;base64,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"},17598:(e,n,r)=>{r.d(n,{A:()=>i});const i="data:image/png;base64,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"},43655:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720130625146-c09822cbaaa0752ea055dff1eda33f38.png"},94878:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720131146878-6fd607e346ba7d85300ce75d257db745.png"},99178:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720131231811-cc2916fcffabaaead30720a649b83d0d.png"},30577:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720131244368-47f160028074a0acf2bc1a0daf857055.png"},78321:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720174343213-2d227efdecd2bcd63bf4f21c8152a4c9.png"},89677:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720191712559-d4b5893e567fbacc550b31abc95cc18f.png"},66140:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20240720222544200-49188dea6b9ac06001982052f80bb586.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var i=r(96540);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);