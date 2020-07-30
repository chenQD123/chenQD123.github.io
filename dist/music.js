const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: '倾城', //音频名称
            artist: '陳奕迅', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=27867449.mp3', //音频外链
            cover: 'https://p2.music.126.net/eVNxevw1W5lyBmdq18tMJw==/109951163639097093.jpg?param=90y90', //音频封面
            lrc: '/dist/lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '明年今日', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '陳奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=64599.mp3',
            cover: 'https://p1.music.126.net/LE6HV_Y5-HXFfdXKGhJ94Q==/109951163104933982.jpg?param=130y130',
            lrc: '/dist/lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '好歌献给你', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '陳奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=64425.mp3',
            cover: 'https://p1.music.126.net/7dbK-A_In2Wol92TDMYIGw==/6636652185368776.jpg?param=130y130',
            lrc: '/dist/lrc3.lrc',
            theme: '#46718b'
        }
        // ,
        // {
        //     name: '我的世界末日', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
        //     artist: '陳奕迅',
        //     url: 'http://m10.music.126.net/20200729164539/daad94fd6e901a31f734245a2a633c80/ymusic/f5f6/1df0/5d91/d27146a70f7a09095e9a802bae3f3611.mp3',
        //     cover: 'https://p1.music.126.net/7dbK-A_In2Wol92TDMYIGw==/6636652185368776.jpg?param=130y130',
        //     lrc: '/dist/lrc4.lrc',
        //     theme: '#46718b'
        // },
        // {
        //     name: '无人之境', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
        //     artist: '陳奕迅',
        //     url: 'http://m10.music.126.net/20200729164820/53c318808381737086925fecd0b674b3/ymusic/9420/09f7/a66e/d09842405094532d67c4d19beb42eea5.mp3',
        //     cover: 'https://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=130y130',
        //     lrc: '',
        //     theme: '#46718b'
        // }
    ]
});
// ap.lrc.hide(); //隐藏歌词

// ap.volume(0.1, true); //设置音频音量
