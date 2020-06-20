var tipuesearch = {"pages": [{'title': '組長', 'text': '\xa050833104 曾容琪 \n', 'tags': '', 'url': '組長.html'}, {'title': '組員', 'text': '50833106 吳宇恩 \n 50833113 蔡文哲 \n 50833114 胡嘉盛 \n 50833116 王崇杰 \n 50833118 鍾舒姍 \n 50833120 余靖幃 \n 50833125 黃尹辰 \n 50833140 黃昱翔 \n 50833141 黃智翔 \n', 'tags': '', 'url': '組員.html'}, {'title': 'w1', 'text': '建立blogger \n 課程小單字 \n 1 super computer 超級電腦 2pc=person computer 個人電腦  3mainframe 伺服器主機 4 server 伺服器 (虛擬 實體) 5 mobile phone 手機 6 microcontroller 微控制器 \n Port 埠號 DHCP動態網路位置. \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '課程小筆記 \n IPv4 version 4 IP 四個區段,用.隔開 IPv6 version 6 IP 八個區段,用:隔開 [2001:288:6004:17::53]:3128 140.130.17.53:3128 [2001:288:6004:17::42]:3128 140.130.17.53:254(系gateway通道) [2001:288:6004:17::17]:3128 140.130.1.*(校主幹) [2001:288:6004:17::7]:3128 \n 課程小單字 tcp/ip==trandmision control protocol/internet protocol inter-net==inter-national(國際) (網際,inter+networt) protocal 協定 microscope 顯微鏡 telescope 望遠鏡 trasmit 傳輸 data 資料 packet 封包 \n control 控制 macro 巨(比原子(atom)大) atomic bomb 原子彈中華電信 dns. server. dns==domain name server 符號名稱伺服器 version 版本(短時間) edition 版本(長時間) router 路由器 route 路徑 remote login 遠端登入 micro 微 \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3建立可攜式環境', 'text': '建立可攜式環境 \n 為了讓工程師可以在不同的 Windows 10 64 位元電腦上管理 CMSiMDE 網際內容管理系統, 因此需要 Python 解譯環境以及一個文字檔案的編輯器. \n 這裡所安裝的 Python 解譯器選擇由 C 所編寫的 CPython, 可以從 https://www.python.org/ 下載安裝. 但是在此我們要將 Python 解譯系統配置在 USB 隨身碟上, 使用者可以隨身攜帶, 一旦配置完成後, 可以在任何一台 Windows 10 64 位元的筆電或電腦上執行 Python 或 C 程式. \n 可攜 Python 程式環境的建立步驟: \n 安裝 Python 套件時, 不要安裝 pip, 之後將 Python38 目錄複製到 data 目錄中, 然後建立 start.bat 指定使用可攜系統中的 Python, 之後再利用 get-pip.py, 以命令列中的 python get-pip.py 安裝 pip. \n 可攜 Tiny C 程式環境的建立步驟: \n 從 https://bellard.org/tcc/ 下載 Tiny C, 將 tcc 解開壓縮後放到 data 目錄中. 然後修改 wscite 目錄中的 cpp.properties, 使用 Tiny C 類解譯 .c 程式. \n 選用的文字編輯器: https://www.scintilla.org/SciTE.html \n 建立完成的可攜程式環境: \n 下載 wcmj2020_tool.7z, 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等) \n 將 wcmj2020_tool.7z 解壓縮到隨身碟或電腦硬碟中, 將 home 與 home_ipv6 目錄中的 .gitconfig user.name 與 user.email 改為自己的 Github 帳號與 email 後, 利用 start.bat 啟動可攜系統, 利用 stop.bat 關閉可攜系統. \n', 'tags': '', 'url': 'w3建立可攜式環境.html'}, {'title': 'w4建網站', 'text': '此內容管理系統以 https:..github.com.mdecourse.cmsimde 作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. 利用 cmsimde 建立靜態網誌方法: 在 github 建立倉儲, git clone 到近端 參考https:..github.com.mdecourse.newcms, 加入除了 cmsimde 目錄外的所有內容 以 git submodule add https:..github.com.mdecourse.cmsimde cmsimde 建立 cmsimde 目錄, 並從 github 取下子模組內容. 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: git clone --recurse-submodules https:..github.com.mdecourse.newcms.git \n', 'tags': '', 'url': 'w4建網站.html'}, {'title': 'w5', 'text': '筆記 firmwarre 韌體 \n software 軟體 hardware 硬體 \n terminology 專業術語 particular 特別 technical 技術 application 應用 command wundow 命令視窗 submodule 子模組 machine language 機器語言 URL:Uniform Resourse Locator 統一資源定位 ----------------------------------------------------------------------------------------------------------------- 程式令: Y:←指y槽 Y:\\ ←表示Y槽的root根目錄 為回應符號(prormptsign) \n \\ 為blackslash 反斜線 dir為顯示目錄內容的指令 cd tmp 表示change directory 到指定的目錄 git為分散式版次管理的指令名稱 git clone表示要使用git對遠端的倉儲進行clone。 \n 課堂小單字 shell 殼 interface 介面 device 物件 graphics 圖形 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': ' portable obs教學 portable obs google hangout meet streeming and recording --------------------------------------------------------------------------------------------------------------- 讓手機可以利用電腦熱點上網： 採用 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網。 但是因為目前 Windows 10 並未提供 IPv6 網路協定下的網路熱點功能, 因此在純 IPv6 網路協定下無法使用"行動熱點"服務。 利用手機鏡頭當作 webcam: Android: https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows iPhone: https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \n 需要 clone 個人倉儲時： git clone --recurse-submodules 倉儲_url.git 例如: git clone --recurse-submodules https://github.com/mdecourse/wcmj2020.git 現場直播的 audio 錄音設定 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7-8', 'text': ' grouping and meeting \n 第三組group3 50833104 組長 50833106 50833113 50833114 50833116 50833118 50833120 50833125 50833140 50833141 \n proxy \n 2001:288:6004:17::53 2001:288:6004:17::42 2001:288:6004:17::17 2001:288:6004:17::4 "虛擬主機 可以校外連接" \n 下周可能線上上課 \n', 'tags': '', 'url': 'w7-8.html'}, {'title': 'w9期中考', 'text': '學習這幾周下來之心得 \n w1教我們如何建立blogger \n w2-4則是教我們如何用git指令建立cmsimde網站，並如何維護 \n 而w6-w9則是教學如何開直播 \n', 'tags': '', 'url': 'w9期中考.html'}, {'title': 'w10-12如何用ssh', 'text': '由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從 https://www.chiark.greenend.org.uk/~sgtatham/putty/ 下載一般版, 或從 http://jakub.kotrla.net/putty/ 下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以 \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n 修改啟動的 start.bat 加入下列設定:   set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位. \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push了喔。 \n', 'tags': '', 'url': 'w10-12如何用ssh.html'}, {'title': 'W13', 'text': '利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 Desktop app 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n 將 client_secrets.json 轉為 credential_token.dat 的程式: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language   python \n # https://developers.google.com/blogger/docs/3.0/using \n # under Mac command + b to execute \n import   pickle \n import   os \n from   googleapiclient.discovery  import   build \n from   google_auth_oauthlib.flow  import   InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES  =   [ \'https://www.googleapis.com/auth/blogger\' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if   not   os.path.exists( \'./../../yen_gm_blogger_token.dat\' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow  =   InstalledAppFlow.from_client_secrets_file( \'./../../yen_gm_blogger_secrets.json\' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials  =   flow.run_local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'wb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump(credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n g.es(service) \n \n \n \n \n \n \n \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n \n \n \n @language   python \n from   markdown  import   markdown \n from   oauth2client  import   client \n #from googleapiclient import sample_tools \n import   os \n # 配合使用 credential token \n import   pickle \n from   googleapiclient.discovery  import   build \n #from google_auth_oauthlib.flow import InstalledAppFlow \n #from google.auth.transport.requests import Request \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n with  open ( \'./../../blogger_credentials.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\').execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 post_id  =   posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 # 改用 credential token 後不會產生 blogger.dat \n \xa0\xa0\xa0\xa0 #os.remove("blogger.dat") \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id  =   p.insertAsLastChild()\xa0\xa0  \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題  \n \xa0\xa0\xa0\xa0 to_save_post_id.b  =   "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h  =   post_id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n \n \n \n @language   python \n from   markdown  import   markdown \n from   oauth2client  import   client \n #from googleapiclient import sample_tools \n import   os \n # 配合使用 credential token \n import   pickle \n from   googleapiclient.discovery  import   build \n #from google_auth_oauthlib.flow import InstalledAppFlow \n #from google.auth.transport.requests import Request \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n with  open ( \'./../../blogger_credentials.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline  =   p.getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id  =   postid_outline.h \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 # 使用 credential token 後, 無需刪除 blogger.dat \n \xa0\xa0\xa0\xa0 #os.remove("blogger.dat") \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將更新資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'w14', 'text': '直接在操作系統建立網際內容管理合用系統 \n Windows 10 64 位元操作系統 \n 安裝 Python 3.8.3 與 pip \n 至 https://www.python.org/downloads/windows/ 下載 Python 3.8.3 Windows x86-64 executable installer \n 可以直接選擇安裝 pip 與所有選項內容 \n 安裝 Git \n 利用 64-bit Git for Windows Setup 安裝 Git 工具. \n 安裝 CMSiMDE 所需模組 \n 利用 cmd 開啟命令列視窗, 以 pip 安裝 flask flask_cors lxml bs4 markdown pelican leo 等模組 \n pip install flask flask_cors lxml bs4 markdown pelican leo \n Ubuntu 20.04 操作系統 (請下載 W12 Virtualbox 虛擬主機檔案) \n Ubuntu 20.04 同時存在 Python 2.7 與 Python 3.8.2, CMSiMDE 只相容於 Python 3.8.2, 因此啟動指令必須使用: \n python3 wsgi.py \n 與 \n pip3 install flask flask_cors lxml bs4 markdown pelican leo \n Mac OS X 操作系統 \n 與 Ubuntu 20.04 類似. \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15-18統整', 'text': '將 W1-W14 週的所有上課內容, 以圖文及影音資料加以整理在個人及分組倉儲、網站及簡報外,還要自選另一主題, 將分組協同的過程與內容整理在個人與分組的倉儲資料中 \n', 'tags': '', 'url': 'w15-18統整.html'}, {'title': '分組主題報告', 'text': '', 'tags': '', 'url': '分組主題報告.html'}, {'title': '智慧型手錶', 'text': '', 'tags': '', 'url': '智慧型手錶.html'}, {'title': '智慧型手錶的歷史', 'text': '早期 \n \n \n 1972年，第一個開發手腕計算技術的日本 精工 公司，首次發表第一款數位手錶，稱 脈波星 ，由 漢彌爾頓鐘錶公司 所製造。「脈波星」被精工在1978年收購後成為一個品牌的名字。 \n 1982年，脈波星手錶（NL C01）發布，它可以儲存24個數位，使其成為可能是第一款用戶可自我編寫記憶體的手錶，或者叫做「記憶銀行」手錶。 \n 1983年，隨著個人電腦在20世紀80年代被引進，精工開始發展手錶的計算能力。 2000資料 手錶（1983年）有著一個外部鍵盤。資料通過鍵盤輸入進手錶。它的名字源於它能夠儲存2000個字元。 D409 是精工第一款直接在主機板上輸入資料的模式（通過一個微型鍵盤）和獨特的 點陣 顯示。Its memory was tiny, at only 112 digits.它於1984年發布的金、銀和黑色三個版本。在20世紀80年代最引人注目的是精工的「RC系列」：從1980年代開始， 卡西歐 除了做成計算機手錶外，還成功的做成了「電腦手錶」。最引人注目的是 卡西歐資料銀行 系列。此公司也生產例如 Nelsonic遊戲手錶 等一些「遊戲手錶」。 \n \n 精工RC系列 \n \n 1984年，精工發布第一個與電腦有關的模型， RC-1000腕部終端 它相容於當時最流行的電腦，包括蘋果II代、II+代及IIe、the Commodore 64、IBM PC、NEC 8201、Tandy Color Computer、Model 1000、1200、2000和TRS-80 Model I、III、4及4p。 \n 1985年，精工發布第二個 RC-20腕部電腦 ，它有著SMC84C00 8-位 Z-80 微處理器；8K的ROM和2K的RAM。他有著日程、備忘錄、世界時間和四種功能的計算機應用程式。它有著42x32像素的點陣式液晶顯示，並且更重要的是它是觸控式螢幕。同樣相似於RC-1000，它可以通過專用電纜連接到個人電腦。它是可程式化的，但是它的顯示器過小和儲存空間不足嚴重限制了應用程式的開發。 \n 1985年，而 RC-4000 PC資料圖 同樣於1985年發布，被稱為「世界上最小的電腦終端」。他有著2K的儲存空間。 RC-4500 （1985年），也被稱為腕部MAC，它有著鮮艷、明亮的顏色。 \n \n \n', 'tags': '', 'url': '智慧型手錶的歷史.html'}, {'title': '功能', 'text': '', 'tags': '', 'url': '功能.html'}, {'title': 'GPS功能', 'text': 'GPS跟蹤裝置 可以用來完成歷史資料的記錄，然後將資料上傳到電腦或網際網路上並建立一個紀錄檔進行之前練習活動的分析。 \n 此外，一些智慧型手錶有著全 GPS導航儀 ，它擁有一個可以即時顯示地圖及當前坐標的螢幕，使用hh.mm.mmmm（小時，分鐘和分鐘的小數位）與GPS坐標格式。用戶可以通過「Mark（標記）」他們的當前位置，然後編輯這個條目的名稱和坐標，從而建立新的導航。 \n', 'tags': '', 'url': 'GPS功能.html'}, {'title': 'IOS改革', 'text': '對於開發商來說，智慧型手機已經取代了許多人對手錶的需求， 因此智慧手錶要喚起人們對於想配戴手錶的需求， 的確需要更多的說服力。許多分析師認為， 只作為手機的一個附屬週邊無法吸引使用者為它買單， 除非有任何能夠刺激消費者需求的動力。 而這個動力來自於與智慧手錶相結合的軟體平台， 尤其是其能讓開發商能夠針對衛生、健康、 運動和健身方面創造出新的智慧手錶應用 \n', 'tags': '', 'url': 'IOS改革.html'}, {'title': '系統區別', 'text': '', 'tags': '', 'url': '系統區別.html'}, {'title': 'Linux手錶', 'text': '在2000年6月， IBM 展示了一個執行於 Linux 的手錶原型。原始版本僅僅有6個小時的續航時間，後來改進版延長為了12個小時。 它擁有8MB的記憶體，執行Linux2.2。 該裝置後來增加了感應加速度、震動機制與指紋感測器。IBM開始與 西鐵城鐘錶有限公司 合夥打造「WatchPad」。WatchPad1.5版有著320 x 240 QVGA 解析度，且執行Linux 2.4系統。 它還具有行事曆程式、 藍牙 、8MB的暫存空間與16MB的快閃記憶體空間。 西鐵城把市場瞄向了學生和商人，並把該手錶的零售價定為399美元。 然而在2001至2002年的某個時間，該專案被終止了。 \n', 'tags': '', 'url': 'Linux手錶.html'}, {'title': 'Android-1', 'text': 'Android，中文常譯作安卓或安致，是一個基於Linux核心的開放原始碼行動作業系統，由Google成立的開放手機聯盟持續領導與開發，主要設計用於觸控螢幕行動裝置如智慧型手機和平板電腦與其他可攜式裝置。 \n', 'tags': '', 'url': 'Android-1.html'}, {'title': 'watchOS', 'text': '蘋果公司 在2015年正式發售的 Apple Watch 中首次使用了該系統。 \n', 'tags': '', 'url': 'watchOS.html'}, {'title': '現代智慧型手錶名單', 'text': "\n in the 1970s， 計算機手錶 \n 推出日期：1994年， TIMEX資料鏈 系列 \n 開發日期：1998年， Ruputer （也被稱作「掌上PC」） – 一個有著2/4MB的臨時儲存空間的電腦。有著128kb RAM及3.6mhz的16-位CPU。可顯灰度螢幕。通過序列埠/序列紅外收發器連接電腦。2 x 2016或2032電池，1個月的電池壽命。應用程式包括電子試算表和記事本，以及各種遊戲。 \n 發布日期：2003年， Fossil腕部PDA \xa0 – 此手錶可以執行Palm4作業系統且有8M內部儲存空間，資料儲存是暫時的，如果電量耗盡，那麼所有資料將遺失。可以通過MicroUSB以及紅外線與電腦連接。此表擁有顯示灰階的觸控式螢幕，龍珠 VZ CPU @ 55mhz。 \n 推出日期：2003年， Garmin先驅 \n 推出日期：2009年Q4， LG GD910 （限量版） \n 發布日期：2010年9月，第六代 IPod nano \xa0 - 有一個可拆卸的支架、用於固定手錶的錶帶和 媒體播放器 （電池可以連續使用1天，可以作為手錶使用）。 \n 發布日期：2012年第一季度， Sony SmartWatch \xa0 1 (第一代) \n 發布日期：2012年9月， MetaWatch \xa0 Strata \n 發布日期：2013年6月， Sony \xa0 SmartWatch 2 \n 發布日期：2013年7月， Pebble: E-paper手錶 \xa0 - 這款手錶擁有電動遊戲，可以更改手錶介面，還可以收到文字（通過指定應用程式傳送），更可以告訴你有電話打進來了。手機用藍牙傳輸資料，電池可以連續使用達1個星期（升級版電池可以連續使用2至3周）。這款手錶目前正在批次生產中。 \n 海王星松樹（Neptune Pine） - 一個可以說是完全獨立的Android智慧型手錶，有3G、GPS、802.11 Wi-Fi、藍牙等等很多功能。 \n Nike+ FuelBand 與其他的 NikeFuel \xa0 ，如 Nike+ SportWatch GPS 裝置。 \n i'm WATCH \n Samsung Galaxy Gear \n WIMM One （30小時） \n Suunto 專門為訓練、潛水以及戶外運動設計的運動手錶。 \n 摩托羅拉 Motoactv \n Cookoo \n Agent \n KREYOS \n Trakdot U1 \n ZGPAX S5 android 4.0.3 CPU 1G/RAM:512M/HD:4G battery 500ma \n in watch_Z android 4.2 CPU 1.2G/RAM:1G/HD:8G battery 500ma \n simValley AW412 android 4.22 CPU 1.3G/RAM:1G/HD:4G battery 600ma \n gear watch android 4.1 CPU 1G/RAM:1G/HD:4G battery 330ma \n 迪威諾 DS6 android 4 CPU 1G/RAM:128M/HD:4G battery 330ma \n 愛酷 IK8 android 4 CPU 1G/RAM:512M/HD:4G battery 700ma \n Iradish I6 android 4.0.4 CPU 1G/RAM:512M/HD:4G battery 500ma \n Omate TrueSmart \n Z Watch \n 蘋果手錶 \n 華為手錶 \n 華米手錶(大陸小米轉投資) \n 小米手錶 \n \n \n \n", 'tags': '', 'url': '現代智慧型手錶名單.html'}, {'title': '通俗文化', 'text': '20世紀40年代的卡通人物 迪克·崔西 有著一個可以接受及發射訊號的的手腕電台，它一直被視為現代智慧型手錶的先驅。 \n 在1982年的電視連續劇 霹靂遊俠 中，主角麥可·奈特戴著可以雙向通訊的手錶。 \n', 'tags': '', 'url': '通俗文化.html'}, {'title': '組員使用心得', 'text': '', 'tags': '', 'url': '組員使用心得.html'}, {'title': 'Android-2', 'text': 'Andriod \xa0 智慧手錶使用心得 50833114胡嘉盛 \n Asus Vivowatch-BP \xa0 華碩推出的健康智慧手表，我對他的第一印象就是他的外型時尚好看，戴起來輕盈無負擔，是個很棒的科技產品。這隻手錶不僅能隨時監控偵測並記錄你的身體健康狀態，如：心律、血壓、睡覺時數、運動狀態等，甚至他還會藉由這些數據計算出你的身體健康及運動狀況，並適時給予你健康管理上的建議。他還可以隨時接收你手機的訊息，有人來電或者是有人給你傳訊息時都會給你完整且簡單明瞭的訊息提示，增進我生活上的方便，讓我的生活更加便利。這隻手錶還有很多很棒的地方，等著你一一去發現。 \n Andriod \xa0 智慧手錶使用心得 50833125黃尹辰 \n 它可以 除了可以紀錄時間外，還能隨時知道自己的心跳和今天走的步數，他的運 動功能類型可以分為室內跑步、室外跑步、健走、騎行，在不同的運動模 式下，分別可以看到：運動時長、配速、最高時速、距離、即時心率，上 下坡高度等等。 這款手錶還能連結手機上的通訊軟體，可以看到訊息中的文字，但如果是 圖片就沒辦法顯示，它還會有個簡易的氣象報告。除此之外，它的用電量 很省，充一次電就能撐 20 多天。整體來說使用的感想不錯，只是有時候 GPS 不太準。\xa0 \n', 'tags': '', 'url': 'Android-2.html'}, {'title': 'WatchOS222', 'text': 'Apple Watch 使用心得 50833104曾容琪 \n 使用很方便 \n 例如抬腕顯示,不會太耗電,抬起手腕就能看到時間 \n 還可以監測健康心跳和今天的運動情況 \n 並且錶面圖片可以依照自己的喜好變換 \n 我覺得還蠻值得的 \n Apple Watch 使用心得 50833141黃智翔 \n 在這個手環中 我充分體會到 手錶不再是手錶 手錶從原本的功能 慢慢結合科技 成就了21世代中的科技產物 在這個搭載IOS 系統的手錶中 我們可以實現 手機的遠端操作 檢測心跳 收發訊息 以及撥打電話 不在依賴手機本體的操作 使我們生活更加便利 也對行車安全帶來更高的安全性 在此之外 這個手環還結合了NFC 使得我們在購物時 無須使用現金和實體信用卡 我們僅需將手錶靠近付款工具 輕觸即可 方便又快速', 'tags': '', 'url': 'WatchOS222.html'}]};