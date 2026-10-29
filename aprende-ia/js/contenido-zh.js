/*
 * Contenido del curso en chino mandarín (caracteres simplificados).
 * Tiene la misma estructura que contenido.js: mismos módulos, mismas
 * preguntas y mismas respuestas correctas, para que el progreso sirva
 * en los dos idiomas. Algunos ejemplos se adaptaron a la cultura china.
 */

CONTENIDO.zh = {
  niveles: [
    { numero: 1, nombre: "入门第一步", descripcion: "什么是人工智能，以及我们每天在哪里遇到它。" },
    { numero: 2, nombre: "动手试试", descripcion: "怎么和AI助手对话，并在日常生活中使用它。" },
    { numero: 3, nombre: "明辨是非", descripcion: "什么时候要提高警惕、怎么核实信息、怎么防范诈骗。" },
    { numero: 4, nombre: "深入了解", descripcion: "AI内部是怎么运作的，以及怎么制定您自己的使用计划。" }
  ],

  modulos: [
    // ───────────────────────────── 第1级 ─────────────────────────────
    {
      id: 1,
      nivel: 1,
      titulo: "什么是人工智能？",
      resumen: "用最简单、不带专业术语的话，讲清楚人工智能是什么、不是什么。",
      objetivos: [
        "用自己的话解释什么是人工智能。",
        "分清现实中的AI和电影里的AI。",
        "消除恐惧：AI是一种工具，就像计算器一样。"
      ],
      secciones: [
        {
          titulo: "一个简单的概念",
          html: `
            <p><strong>人工智能</strong>（简称<strong>AI</strong>）是一种电脑程序，它通过<strong>学习大量的例子</strong>，
            来完成以前只有人才能做的事情：听懂我们说的话、认出照片里的人脸、翻译文章或回答问题。</p>
            <p>想一想您是怎么学会分辨西红柿熟没熟的。没有人给过您一条精确的规则：您看过几百个西红柿，慢慢就“有了眼力”。
            AI的学习方式也差不多，只不过它看的是几百万个例子，而且速度非常快。</p>`
        },
        {
          titulo: "AI不是什么",
          html: `
            <ul>
              <li><strong>它不是电影里的机器人</strong>，没有自己的感情或意图。</li>
              <li><strong>它不是人</strong>，屏幕后面并没有人在回答，虽然有时候感觉像。</li>
              <li><strong>它并非无所不知</strong>，也会出错（我们会在第3级讲到）。</li>
            </ul>
            <p>它是一种<strong>工具</strong>。就像计算器算得比我们快，但并不“理解”数字一样，AI可以写文章、聊天，但它没有意识。</p>`
        },
        {
          titulo: "为什么现在大家都在谈论它？",
          html: `
            <p>AI已经存在了60多年，但最近几年有了很大的飞跃：现在任何人都可以用手机，<strong>用中文打字或说话来和它交流</strong>。
            不需要懂电脑。</p>
            <p>这意味着您可以请它帮忙，比如：<em>“帮我解释一下银行来信里这个词是什么意思”</em>，
            或者<em>“用我冰箱里现有的东西，给我一个菜谱”</em>。</p>`
        },
        {
          titulo: "一个便于记住的比喻",
          html: `
            <div class="caja-ejemplo">
              <p>AI就像一个<strong>读过很多书的助手</strong>：它读过几百万本书和网页，回答又快又热心，
              但是<strong>有时会弄错，而且不一定承认</strong>。所以，做决定的始终是您自己。</p>
            </div>`
        }
      ],
      recordar: [
        "AI是一种从大量例子中学习的程序。",
        "它没有感情和意图：它是一种工具。",
        "现在可以用手机、用中文和它对话。",
        "它可能出错：最后拿主意的永远是您。"
      ],
      preguntas: [
        {
          pregunta: "下面哪一项最能描述人工智能？",
          opciones: [
            "一个像人一样思考、有感情的机器人。",
            "一个从大量例子中学习来完成任务的程序。",
            "一个在办公室里回复消息的人。"
          ],
          correcta: 1,
          explicacion: "AI是从例子中学习的程序。它没有感情，也不是有人在回答。"
        },
        {
          pregunta: "AI会出错吗？",
          opciones: ["从不，它永远是对的。", "会，有时会出错。", "只有关机的时候才会。"],
          correcta: 1,
          explicacion: "会。AI会犯错，有时还说得很肯定。所以重要的事情最好核实一下。"
        },
        {
          pregunta: "哪个比喻最像AI的学习方式？",
          opciones: [
            "看过很多西红柿之后，学会分辨熟没熟。",
            "背下一个朋友的电话号码。",
            "用开关打开电灯。"
          ],
          correcta: 0,
          explicacion: "就像我们靠经验学习一样，AI是通过看大量的例子来学习的。"
        },
        {
          pregunta: "现在使用AI需要懂电脑吗？",
          opciones: ["需要，得会编程。", "不需要，用中文对话就可以。"],
          correcta: 1,
          explicacion: "现在的AI助手能听懂日常用语，打字或说话都可以。"
        }
      ],
      ejercicios: [
        {
          titulo: "用自己的话解释",
          pasos: [
            "准备纸和笔（或者手机上的备忘录）。",
            "用2到3行字写下什么是AI，就像讲给孙子孙女或朋友听一样。",
            "把您写的和“要点回顾”比较一下。有没有漏掉什么？"
          ],
          consejo: "没有标准答案。重要的是这个解释对您自己来说讲得通。"
        },
        {
          titulo: "电影与现实",
          pasos: [
            "想一部出现机器人或智能电脑的电影或电视剧。",
            "写下那台机器会做、但现实中的AI做不到的一件事（比如：有感情）。"
          ],
          consejo: "分清幻想和现实，有助于消除对科技的恐惧。"
        }
      ]
    },

    {
      id: 2,
      nivel: 1,
      titulo: "您早就在用的AI",
      resumen: "发现AI已经在哪些地方帮助您：手机、电子邮件、地图等等。",
      objetivos: [
        "认出日常生活中至少五种AI的用途。",
        "明白您其实早已是AI的用户，只是自己不知道。",
        "增强信心，迈出下一步。"
      ],
      secciones: [
        {
          titulo: "好消息：您已经在用AI了",
          html: `<p>很多人以为自己从来没用过人工智能，但其实我们几乎每天都在用。来看几个例子。</p>`
        },
        {
          titulo: "在手机上",
          html: `
            <ul>
              <li><strong>输入法会猜您要打的下一个词</strong>：这就是AI。</li>
              <li><strong>语音输入</strong>：您按一下麦克风说话，手机就把您说的话变成文字。</li>
              <li><strong>语音助手</strong>，比如“小爱同学”、“嘿Siri”、“Ok Google”或Alexa。</li>
              <li><strong>相册</strong>：手机会自动认出人脸，把每个孙子孙女的照片归在一起。</li>
            </ul>`
        },
        {
          titulo: "在家里和街上",
          html: `
            <ul>
              <li><strong>地图（如高德地图、百度地图、Google地图）</strong>会根据路况算出最快的路线。</li>
              <li><strong>电子邮件</strong>会自动把垃圾邮件分出来。</li>
              <li><strong>视频和音乐软件</strong>（如抖音、YouTube、Netflix、Spotify）会根据您的喜好推荐视频、电影或音乐。</li>
              <li><strong>银行</strong>会发现您的银行卡有异常消费并提醒您。</li>
              <li><strong>翻译软件</strong>，甚至可以用摄像头对着招牌直接翻译。</li>
            </ul>`
        },
        {
          titulo: "新事物：会聊天的助手",
          html: `
            <p>这几年的新东西是<strong>对话式AI助手</strong>：您可以像和人聊天一样给它打字或说话，它会给出完整的回答。
            下一课您就会认识它们。</p>
            <div class="caja-ejemplo"><p>如果您用过语音输入或手机导航，<strong>您就已经有使用AI的经验了</strong>。接下来只是再往前走一步。</p></div>`
        }
      ],
      recordar: [
        "输入法、语音输入和语音助手都用到了AI。",
        "地图、垃圾邮件过滤和推荐功能也是。",
        "银行用AI来发现诈骗。",
        "您早已是AI用户：接下来要学的是怎么向它提要求。"
      ],
      preguntas: [
        {
          pregunta: "下面哪一样用到了人工智能？",
          opciones: ["手电筒。", "能算出最快路线的手机导航。", "上发条的钟。"],
          correcta: 1,
          explicacion: "导航会分析路况，选出最好的路线：这就是AI。"
        },
        {
          pregunta: "电子邮件把垃圾邮件分出来时，用的是什么？",
          opciones: ["人工智能。", "有人在读您的邮件。", "什么也没用，是巧合。"],
          correcta: 0,
          explicacion: "有一个程序看了几百万个例子，学会了识别垃圾邮件。"
        },
        {
          pregunta: "什么是“语音输入”？",
          opciones: [
            "手机把您的消息大声念出来。",
            "手机把您说的话写成文字。",
            "打语音电话。"
          ],
          correcta: 1,
          explicacion: "按一下键盘上的麦克风，说话，手机就把您的话打出来。字太小看不清的时候特别有用。"
        },
        {
          pregunta: "对话式AI助手有什么新的地方？",
          opciones: [
            "可以和它们对话，它们会给出完整的回答。",
            "只能用英文。",
            "会取代手机。"
          ],
          correcta: 0,
          explicacion: "您可以像对人一样给它们打字或说话，用中文也可以。"
        }
      ],
      ejercicios: [
        {
          titulo: "在手机里“寻宝”",
          pasos: [
            "打开任意一个聊天软件（比如微信或WhatsApp）。",
            "开始输入“早”，看看输入法有没有推荐“上好”。这就是AI！",
            "现在按一下键盘上的麦克风图标🎤（不是发语音的那个按钮），说：“你好，我正在学习人工智能”。",
            "看看文字是怎么出现的。不用发送，可以直接删掉。"
          ],
          consejo: "如果找不到麦克风，请您信任的人帮您看看它在键盘上的哪里。很值得学：以后会经常用到。"
        },
        {
          titulo: "我的AI清单",
          pasos: [
            "写下您在家里用的三样电器或手机软件。",
            "在每一样旁边写上您觉得它有没有用到AI、用来做什么（比如：“抖音——给我推荐视频”）。"
          ],
          consejo: "这份清单会让您发现，自己其实已经懂得很多了。"
        }
      ]
    },

    {
      id: 3,
      nivel: 1,
      titulo: "认识AI助手",
      resumen: "ChatGPT、Gemini、Copilot、Claude、Meta AI、DeepSeek和豆包：它们是什么、怎么用、怎么免费开始。",
      objetivos: [
        "认识最常用的AI助手。",
        "知道怎么在手机或电脑上使用其中一个。",
        "认识AI助手界面上的各个部分。"
      ],
      secciones: [
        {
          titulo: "什么是AI助手？",
          html: `
            <p>它是一个手机软件或网站，您在里面<strong>写下（或说出）一个问题或请求</strong>，AI就会<strong>回答</strong>您。
            它很像微信或WhatsApp的聊天窗口，只不过对面是一个程序。</p>`
        },
        {
          titulo: "最常见的几种",
          html: `
            <table class="tabla">
              <thead><tr><th>名称</th><th>公司</th><th>在哪里找到</th></tr></thead>
              <tbody>
                <tr><td><strong>ChatGPT</strong></td><td>OpenAI</td><td>“ChatGPT”应用或 chatgpt.com</td></tr>
                <tr><td><strong>Gemini</strong></td><td>Google</td><td>“Gemini”应用或 gemini.google.com（很多安卓手机自带）</td></tr>
                <tr><td><strong>Copilot</strong></td><td>微软</td><td>“Copilot”应用或 copilot.microsoft.com</td></tr>
                <tr><td><strong>Claude</strong></td><td>Anthropic</td><td>“Claude”应用或 claude.ai</td></tr>
                <tr><td><strong>Meta AI</strong></td><td>Meta</td><td>在WhatsApp里（彩色圆圈图标）</td></tr>
                <tr><td><strong>DeepSeek</strong></td><td>深度求索</td><td>“DeepSeek”应用或 chat.deepseek.com</td></tr>
                <tr><td><strong>豆包</strong></td><td>字节跳动</td><td>“豆包”应用或 doubao.com</td></tr>
              </tbody>
            </table>
            <p>它们都有<strong>免费版</strong>，足够学完整个课程。<strong>先只选一个</strong>开始就好，它们的用法都很相似。</p>
            <p>提示：在中国大陆，常用的是DeepSeek、豆包、通义千问（阿里巴巴）或文心一言（百度）等；
            在其他国家和地区，ChatGPT、Gemini、Copilot和Claude更常见。</p>`
        },
        {
          titulo: "怎么开始",
          html: `
            <ol>
              <li>从手机的<strong>官方</strong>应用商店下载（安卓手机用自带的应用商店或Play商店，苹果手机用App Store）。
              看清楚开发公司的名称是否正确。</li>
              <li>很多软件需要用您的手机号、电子邮箱、Google或Apple账号<strong>登录</strong>。</li>
              <li>如果软件推荐付费版，您可以点<strong>“以后再说”</strong>或关掉那个提示：免费版就够用了。</li>
            </ol>
            <div class="caja-alerta"><p><strong>小心：</strong>有些假冒软件模仿真的软件，目的是收钱或盗取资料。
            拿不准的时候，请家人帮忙，或者去社区中心、图书馆或老年活动中心问一问。</p></div>`
        },
        {
          titulo: "界面上的各个部分",
          html: `
            <ul>
              <li><strong>输入框</strong>（在下方）：在这里写您的消息。通常写着“有问题，尽管问”或“发消息”。</li>
              <li><strong>麦克风🎤</strong>：用说话代替打字。</li>
              <li><strong>箭头➤</strong>：发送消息。</li>
              <li><strong>回形针📎或加号+</strong>：添加照片或文件。</li>
              <li><strong>“新对话”</strong>：换一个话题，重新开始聊。</li>
            </ul>`
        }
      ],
      recordar: [
        "AI助手就像一个聊天窗口，回答您的是一个程序。",
        "常见的有：ChatGPT、Gemini、Copilot、Claude、Meta AI、DeepSeek和豆包。",
        "免费版就够用。先只选一个开始。",
        "一定要下载官方软件。"
      ],
      preguntas: [
        {
          pregunta: "下面哪一个是人工智能助手？",
          opciones: ["Gemini", "Facebook Marketplace", "计算器"],
          correcta: 0,
          explicacion: "Gemini是Google的AI助手。其他的还有ChatGPT、Copilot、Claude、DeepSeek等。"
        },
        {
          pregunta: "使用AI助手一定要付钱吗？",
          opciones: ["是的，一直要付钱。", "不用，它们都有免费版。"],
          correcta: 1,
          explicacion: "免费版足够学习和日常使用。"
        },
        {
          pregunta: "“新对话”按钮是做什么用的？",
          opciones: [
            "叫技术人员。",
            "换一个话题，开始新的对话。",
            "删除这个软件。"
          ],
          correcta: 1,
          explicacion: "换话题时最好开一个新对话，这样AI不会把事情搞混。"
        },
        {
          pregunta: "应该从哪里下载软件？",
          opciones: [
            "从别人发给我的链接下载。",
            "从手机的官方应用商店下载，并核对开发公司的名称。"
          ],
          correcta: 1,
          explicacion: "消息里收到的链接可能是假的。请用官方应用商店。"
        }
      ],
      ejercicios: [
        {
          titulo: "选择并安装我的助手",
          pasos: [
            "从表格里选<strong>一个</strong>助手（如果您用WhatsApp，里面已经有Meta AI；很多安卓手机自带Gemini）。",
            "如果需要，从手机的官方应用商店下载。",
            "打开它，找到：输入框、麦克风和发送箭头。"
          ],
          consejo: "第一次有人陪着一起做完全没问题。一起学更有意思！"
        },
        {
          titulo: "我的第一次问候",
          pasos: [
            "在输入框里写下面这段话，然后点箭头发送：",
            "<span class=\"prompt\">你好，我正在学习使用人工智能。你能用简单的几句话告诉我，你能帮我做些什么吗？</span>",
            "慢慢读回答。"
          ],
          consejo: "您不会把任何东西“弄坏”。如果回答太长，就写：“请说得简短一点。”"
        }
      ]
    },

    // ───────────────────────────── 第2级 ─────────────────────────────
    {
      id: 4,
      nivel: 2,
      titulo: "怎么向AI提要求",
      resumen: "好回答的秘诀是好的提问。学会“三要素”的方法。",
      objetivos: [
        "写出清楚、有背景信息的请求。",
        "请AI修改或改进它的回答。",
        "把对话当成一来一回的交流。"
      ],
      secciones: [
        {
          titulo: "像对一个新助手那样说话",
          html: `
            <p>想象您请了一位很能干的助手，但他<strong>还完全不了解您</strong>。如果您只说“做个蛋糕”，
            他不会知道要做几人份、什么口味，也不知道有没有客人有糖尿病。AI也一样：<strong>要求越清楚，回答就越好</strong>。</p>
            <p>我们写给AI的消息有时被称为<em>“提示词”</em>（英文叫“prompt”）。其实就是<strong>您的请求</strong>。</p>`
        },
        {
          titulo: "秘诀：三个要素",
          html: `
            <ol>
              <li><strong>您要什么：</strong>任务。<em>“给我一个蛋糕的做法……”</em></li>
              <li><strong>给谁或做什么用：</strong>背景。<em>“……8个人吃，其中一位有糖尿病……”</em></li>
              <li><strong>您想要什么样的：</strong>格式。<em>“……步骤要简短、编好号，字要大一点，不戴老花镜也能看。”</em></li>
            </ol>
            <div class="comparacion">
              <div class="caja-mal"><p class="etiqueta">含糊的请求</p><p>“蛋糕做法。”</p></div>
              <div class="caja-bien"><p class="etiqueta">清楚的请求</p><p>“给我一个无糖苹果蛋糕的做法，8个人吃。其中一位客人有糖尿病。步骤要简短并编号。”</p></div>
            </div>`
        },
        {
          titulo: "这是对话：可以要求修改",
          html: `
            <p>不用一次就问得完美。看完回答后，您可以继续写：</p>
            <ul>
              <li><span class="prompt">请解释得更简单一点。</span></li>
              <li><span class="prompt">请说得短一点。</span></li>
              <li><span class="prompt">再举一个例子。</span></li>
              <li><span class="prompt">我不明白“复利”是什么意思，能解释一下吗？</span></li>
            </ul>
            <p>AI<strong>记得在同一个对话里说过的内容</strong>，所以不用把所有事情再重复一遍。</p>`
        },
        {
          titulo: "一个很实用的小窍门",
          html: `
            <div class="caja-ejemplo"><p>不知道该怎么提要求的时候，就写：
            <span class="prompt">我想要___。在回答之前，请先问我一些你需要知道的问题，好更好地帮我。</span>
            AI会向您提问，您只要回答就行了。</p></div>
            <p>还要记住：<strong>不用说得很正式，有错别字也没关系</strong>。AI就算有错字也能看懂。</p>`
        }
      ],
      recordar: [
        "要求越清楚，回答就越好。",
        "三要素：要什么、给谁或做什么用、想要什么样的。",
        "可以要求修改：“更简单”、“更短”、“再举个例子”。",
        "不知道怎么问时，请AI先向您提问。"
      ],
      preguntas: [
        {
          pregunta: "下面哪个请求能得到更好的回答？",
          opciones: [
            "“旅行。”",
            "“给一对夫妻推荐3个杭州附近的一日游，不用走太多路。”",
            "“说点什么。”"
          ],
          correcta: 1,
          explicacion: "它说清楚了要什么（一日游）、给谁（一对夫妻）、什么样的（3个选择、少走路）。"
        },
        {
          pregunta: "如果回答太复杂，最好怎么做？",
          opciones: [
            "关掉软件，再也不用了。",
            "写：“请解释得更简单一点。”",
            "换一部手机从头再来。"
          ],
          correcta: 1,
          explicacion: "这是对话：您可以随时请它换一种方式解释，想问几次都行。"
        },
        {
          pregunta: "好请求的三要素是什么？",
          opciones: [
            "问候、告别和签名。",
            "要什么、给谁或做什么用、想要什么样的。",
            "姓名、年龄和地址。"
          ],
          correcta: 1,
          explicacion: "任务、背景和格式。而且不需要提供地址这样的个人信息！"
        },
        {
          pregunta: "一定要写得没有错别字吗？",
          opciones: ["是的，不然它什么都看不懂。", "不用，就算有错字AI也能看懂。"],
          correcta: 1,
          explicacion: "放心写吧。AI能听懂日常用语。"
        }
      ],
      ejercicios: [
        {
          titulo: "从含糊的请求到清楚的请求",
          pasos: [
            "先发送这个含糊的请求：<span class=\"prompt\">汤的做法。</span>",
            "然后开一个新对话，发送这个清楚的请求：<span class=\"prompt\">给我一个简单的蔬菜汤做法，两个人吃，少放盐。把材料列成清单，步骤编上号。</span>",
            "比较一下两个回答。哪个对您更有用？"
          ],
          consejo: "把“蔬菜汤”换成您最喜欢的菜。"
        },
        {
          titulo: "要求修改",
          pasos: [
            "针对上面的回答，写：<span class=\"prompt\">请说得短一点。</span>",
            "然后写：<span class=\"prompt\">如果我没有南瓜，可以用什么代替？</span>",
            "看看AI是怎么记得你们在聊什么的。"
          ],
          consejo: "多练习这种一来一回的交流：这是整个课程里最重要的本领。"
        }
      ]
    },

    {
      id: 5,
      nivel: 2,
      titulo: "日常生活中的AI",
      resumen: "实用点子：写消息、看懂文件、安排日程、做饭和学习。",
      objetivos: [
        "用AI帮忙写消息和改进消息。",
        "请AI解释难懂的文字。",
        "安排活动、购物和旅行。"
      ],
      secciones: [
        {
          titulo: "写消息和写信",
          html: `
            <p>当我们找不到合适的话时，AI是写作的好帮手：</p>
            <ul>
              <li><span class="prompt">帮我给孙女小雨写一段15岁生日祝福，要简短、欢快、充满爱。</span></li>
              <li><span class="prompt">帮我写一封正式的信，请物业修好楼道里的灯。</span></li>
              <li><span class="prompt">帮我改正这段文字里的错别字，但不要改变我的意思：（粘贴您的文字）</span></li>
            </ul>`
        },
        {
          titulo: "看懂难懂的文字",
          html: `
            <p>银行来信、药品说明书、合同或新闻：您可以把文字复制过来，请它给您解释。</p>
            <ul>
              <li><span class="prompt">请用简单的话解释这段话是什么意思：（粘贴文字）</span></li>
              <li><span class="prompt">“自动扣款”是什么意思？一般怎么取消？</span></li>
            </ul>
            <div class="caja-alerta"><p><strong>重要：</strong>粘贴文件之前，<strong>先删掉您的个人信息</strong>
            （身份证号、账号、地址）。我们会在第8课讲到。</p></div>`
        },
        {
          titulo: "安排日程、购物和出游",
          html: `
            <ul>
              <li><span class="prompt">帮我列一份一个人一周简单饭菜的购物清单，按超市的区域分类。</span></li>
              <li><span class="prompt">我星期二要去看医生，星期四有俱乐部聚会，还想每周散步3次。帮我做一个一周计划。</span></li>
              <li><span class="prompt">我们四月份要去桂林玩3天，想玩得轻松一点。请帮我们安排一个轻松的行程。</span></li>
            </ul>`
        },
        {
          titulo: "学习和娱乐",
          html: `
            <ul>
              <li><span class="prompt">教我5个旅行用的意大利语单词，并告诉我怎么发音。</span></li>
              <li><span class="prompt">用5分钟能读完的篇幅，给我讲讲京剧的历史。</span></li>
              <li><span class="prompt">我们来猜谜语吧：你给我提示，我来猜。</span></li>
              <li><span class="prompt">推荐3本和《活着》类似的书。</span></li>
            </ul>
            <div class="caja-ejemplo"><p>把AI当成<strong>帮您思考和起步的帮手</strong>，而不是替您做事的人。个人的心意要由您来添上。</p></div>`
        }
      ],
      recordar: [
        "AI可以帮忙写消息、写信和改正文字。",
        "它能用简单的话解释难懂的文件。",
        "可以用它安排购物、一周的日程或旅行。",
        "粘贴文件之前，一定要删掉个人信息。"
      ],
      preguntas: [
        {
          pregunta: "您收到一封银行来信，里面有看不懂的词。可以怎么用AI？",
          opciones: [
            "把整封信连同账号一起粘贴进去。",
            "只复制难懂的那段话（不带个人信息），请它用简单的话解释。",
            "什么也做不了，AI不能做这个。"
          ],
          correcta: 1,
          explicacion: "AI很擅长解释，但不要提供账号或身份证号。"
        },
        {
          pregunta: "下面哪一个是用AI安排生活的好方法？",
          opciones: [
            "请它按超市区域列一份购物清单。",
            "把银行卡密码告诉它，让它去付款。",
            "让它替您去超市。"
          ],
          correcta: 0,
          explicacion: "AI可以帮忙做计划。永远不要把密码或银行卡信息告诉它。"
        },
        {
          pregunta: "AI帮您写了一段生日祝福，最好怎么做？",
          opciones: [
            "不看就直接发出去。",
            "读一遍，改掉不喜欢的地方，加上您自己的心意。",
            "转发给所有联系人。"
          ],
          correcta: 1,
          explicacion: "AI给您一个起点。爱和细节要由您来添上。"
        }
      ],
      ejercicios: [
        {
          titulo: "给亲爱的人写一段话",
          pasos: [
            "想一个您想给他发消息的人（生日、感谢、问候）。",
            "请AI帮忙：<span class=\"prompt\">帮我写一段简短的话，感谢邻居王阿姨在我出门旅行时帮我浇花。语气要温暖、朴实。</span>",
            "改掉您不喜欢的地方。可以要求：“更随意一点”或者“加上我会给她带点心”。",
            "如果满意，就复制下来，用微信或WhatsApp发出去。"
          ],
          consejo: "复制文字的方法：用手指按住回答不放，然后选择“复制”。很多软件也有复制按钮📋。"
        },
        {
          titulo: "安排好我的一周",
          pasos: [
            "写下您这周的3到4项活动。",
            "给AI写：“我有这些活动：___。帮我做一个简单的一周计划，每天留一点休息时间。”",
            "看看这个计划对您来说合不合理。"
          ],
          consejo: "您可以请它“做成表格”或者“方便打印”。"
        }
      ]
    },

    {
      id: 6,
      nivel: 2,
      titulo: "和AI说话，给它看照片",
      resumen: "用声音代替键盘，用摄像头识别植物、看清小字或翻译。",
      objetivos: [
        "只用声音和AI交谈。",
        "发一张照片，并针对照片提问。",
        "了解摄像头配合AI的实用用法。"
      ],
      secciones: [
        {
          titulo: "打字费劲？那就说吧！",
          html: `
            <p>所有的助手都可以用两种方式使用声音：</p>
            <ol>
              <li><strong>语音输入（🎤麦克风）：</strong>您说话，文字自动打出来，然后点发送。</li>
              <li><strong>语音对话模式（通常是一个声波图标〰️或几条小竖线）：</strong>像打电话一样聊天。
              AI会大声回答您，您也用说话来回应。</li>
            </ol>
            <p>第一次使用时，手机会请求<strong>允许使用麦克风</strong>。点“允许”。</p>`
        },
        {
          titulo: "和它说话的小建议",
          html: `
            <ul>
              <li>正常说话就好，不要太快，也不用喊。</li>
              <li>如果说错了，可以说：<em>“不对，对不起，我的意思是……”</em>。</li>
              <li>要打断它的回答，点一下屏幕或暂停按钮。</li>
              <li>找一个不太吵的地方。</li>
            </ul>`
        },
        {
          titulo: "摄像头：会“看”的AI",
          html: `
            <p>点<strong>回形针📎、加号+或相机图标</strong>，就可以拍照或选择照片，然后针对照片提问：</p>
            <ul>
              <li>🌿 <span class="prompt">这是什么植物？该怎么养？</span></li>
              <li>🔍 <span class="prompt">请用大字告诉我这个标签上写的是什么。</span></li>
              <li>🍽️ <span class="prompt">我冰箱里有这些食材，可以做什么菜？</span></li>
              <li>🌍 <span class="prompt">把这份菜单翻译成中文。</span></li>
              <li>📺 <span class="prompt">这个遥控器上的每个按钮是做什么用的？</span></li>
            </ul>`
        },
        {
          titulo: "注意安全",
          html: `
            <div class="caja-alerta">
              <p>不要发送<strong>身份证件、银行卡、带有您个人信息的处方</strong>的照片，也不要未经别人同意发送别人的照片。</p>
              <p>关于<strong>药品</strong>：AI可以帮您看清说明书上的小字，但对剂量有任何疑问，一定要问医生或药剂师。</p>
            </div>`
        }
      ],
      recordar: [
        "可以用麦克风语音输入，也可以用语音模式对话。",
        "第一次需要允许使用麦克风和摄像头。",
        "拍张照片就能识别植物、看清小字或翻译。",
        "不要发送证件照片或个人信息。"
      ],
      preguntas: [
        {
          pregunta: "语音对话模式是做什么的？",
          opciones: [
            "让您和AI说话，它像打电话一样大声回答。",
            "自动给家人打电话。",
            "录下您和别人的谈话。"
          ],
          correcta: 0,
          explicacion: "就像聊天一样：您说话，AI大声回答您。"
        },
        {
          pregunta: "下面哪张照片不适合发给AI？",
          opciones: ["花园里的一棵植物。", "您的身份证。", "餐厅的菜单。"],
          correcta: 1,
          explicacion: "个人证件永远不要发给AI。"
        },
        {
          pregunta: "AI帮您看了药品说明书。如果对剂量有疑问，您会怎么做？",
          opciones: [
            "照AI说的做，不用问别人。",
            "问我的医生或药剂师。",
            "保险起见吃双倍。"
          ],
          correcta: 1,
          explicacion: "AI可以帮您看说明书，但健康问题最终要听专业人士的。"
        }
      ],
      ejercicios: [
        {
          titulo: "一次语音聊天",
          pasos: [
            "打开您的助手，找到麦克风🎤或语音模式〰️图标。",
            "说：“你好，给我讲一个关于我们国家的鸟的趣事。”（可以说出您的国家。）",
            "听完回答后，再就它讲的内容问一个问题。"
          ],
          consejo: "如果不能用，检查一下音量是否开大，以及是否允许了使用麦克风。"
        },
        {
          titulo: "让AI替您看",
          pasos: [
            "找一盆植物、一件厨房用品或一个商品标签。",
            "在助手里点📎或+，再点“相机”。拍一张照片。",
            "写下或说出：<span class=\"prompt\">这是什么？有什么用？</span>",
            "把回答和您已经知道的比较一下。它说对了吗？"
          ],
          consejo: "这个练习也会让您看到AI可能出错：考考它吧！"
        }
      ]
    },

    // ───────────────────────────── 第3级 ─────────────────────────────
    {
      id: 7,
      nivel: 3,
      titulo: "当AI出错的时候",
      resumen: "AI可能信心十足地编造信息。学会发现并核实。",
      objetivos: [
        "明白AI为什么有时会编造答案。",
        "掌握三种简单的核实方法。",
        "知道哪些事情一定要请教专业人士。"
      ],
      secciones: [
        {
          titulo: "说得很肯定……却是错的",
          html: `
            <p>AI的设计目的是<strong>给出听起来很对的回答</strong>。大多数时候它是对的，但有时它会<strong>编造</strong>数据、日期、
            名字或地址，而且说得和答对时一样肯定。这种错误叫做<strong>“幻觉”</strong>。</p>
            <div class="caja-ejemplo"><p>它就像那种<strong>从来不说“我不知道”</strong>的熟人：您问他一个他不知道的地址，他照样给您指一条路。</p></div>`
        },
        {
          titulo: "它在哪些方面最容易出错",
          html: `
            <ul>
              <li><strong>最新的新闻</strong>（它的信息可能不是最新的）。</li>
              <li><strong>非常精确的信息：</strong>营业时间、价格、电话、地址。</li>
              <li><strong>引用和出处：</strong>它可能编造书名或名人名言。</li>
              <li><strong>复杂的计算</strong>，以及不太出名的地方或人物。</li>
            </ul>`
        },
        {
          titulo: "三种简单的核实方法",
          html: `
            <ol>
              <li><strong>问它从哪里知道的：</strong><span class="prompt">你怎么知道的？我在哪里可以核实？</span></li>
              <li><strong>和可靠的来源比较：</strong>政府机构、银行、药店的官方网站或知名报纸。</li>
              <li><strong>问问人：</strong>专业人士、家人或该服务的工作人员。</li>
            </ol>
            <p>实用原则：<strong>决定越重要，越要核实。</strong></p>`
        },
        {
          titulo: "AI不能代替任何人的领域",
          html: `
            <div class="caja-alerta">
              <ul>
                <li>🩺 <strong>健康：</strong>症状、诊断、药物剂量 → 找您的医生。</li>
                <li>💰 <strong>钱财：</strong>投资、贷款、养老金 → 找您的银行或理财顾问。</li>
                <li>⚖️ <strong>法律问题：</strong>遗产、合同、手续 → 找律师或官方机构。</li>
              </ul>
              <p>但AI可以帮您<strong>准备好要问的问题</strong>，带去咨询：
              <span class="prompt">我约了心脏科医生。请帮我准备5个关于我高血压的问题。</span></p>
            </div>`
        }
      ],
      recordar: [
        "AI有时会很肯定地编造信息（“幻觉”）。",
        "核实的方法：问来源、做比较、问真人。",
        "决定越重要，越要核实。",
        "健康、钱财和法律问题：一定要找专业人士。"
      ],
      preguntas: [
        {
          pregunta: "AI的“幻觉”是什么？",
          opciones: [
            "AI看见了鬼。",
            "AI编造了一个信息，还把它当成真的说出来。",
            "屏幕在闪。"
          ],
          correcta: 1,
          explicacion: "AI可能编造出听起来很有说服力的信息。"
        },
        {
          pregunta: "AI告诉您某个政府办事处的办公时间。您会怎么做？",
          opciones: [
            "直接去，肯定没错。",
            "到官方网站上或打电话确认一下。",
            "再问AI一遍就行了。"
          ],
          correcta: 1,
          explicacion: "营业时间、价格和地址是AI常出错的信息。一定要确认。"
        },
        {
          pregunta: "在健康方面，下面哪一个是AI的好用法？",
          opciones: [
            "代替看医生。",
            "准备好要问医生的问题。",
            "决定药物的剂量。"
          ],
          correcta: 1,
          explicacion: "AI可以帮您整理思路，但诊断和治疗要由专业人士来做。"
        },
        {
          pregunta: "按照实用原则，什么时候更需要核实？",
          opciones: [
            "决定越重要的时候。",
            "只在星期天。",
            "从来不用，AI不会出错。"
          ],
          correcta: 0,
          explicacion: "做菜的菜谱风险很小。涉及钱或健康，一定要核实。"
        }
      ],
      ejercicios: [
        {
          titulo: "找错小侦探",
          pasos: [
            "问AI一件您非常熟悉的事：您住的街区、您的老本行、您家乡或老单位的历史。",
            "例如：<span class=\"prompt\">给我讲讲___市___区的历史。</span>",
            "仔细读：您有没有发现错误或编造的内容？",
            "如果发现了，就告诉它：“这不对，其实是……”。看看它怎么回应。"
          ],
          consejo: "您知道很多AI不知道的事。您的经验非常宝贵。"
        },
        {
          titulo: "准备一次咨询",
          pasos: [
            "想想您下一次看病、办手续或去银行的事。",
            "请它帮忙：<span class=\"prompt\">我要去咨询关于___的事。请帮我列一份问题清单，免得我忘了什么。</span>",
            "把清单抄在纸上或存在手机里带去。"
          ],
          consejo: "这是AI最有用、也最安全的用法之一。"
        }
      ]
    },

    {
      id: 8,
      nivel: 3,
      titulo: "安全、隐私和AI诈骗",
      resumen: "哪些信息绝不能透露，以及如何识别新型诈骗，比如克隆声音和假视频。",
      objetivos: [
        "知道哪些信息不能告诉AI。",
        "识别利用AI的诈骗：克隆声音、假视频和假照片。",
        "和家人一起制定一个有暗号的安全计划。"
      ],
      secciones: [
        {
          titulo: "绝不能透露的信息",
          html: `
            <p>和AI的对话可能会被保存，有时还可能被审阅以改进服务。所以，<strong>千万不要写</strong>：</p>
            <ul>
              <li>🔑 密码、银行密码或PIN码。</li>
              <li>💳 银行卡号或银行账号。</li>
              <li>🪪 身份证号或养老金账号。</li>
              <li>🏠 您的详细住址，或能认出您身份的健康信息。</li>
            </ul>
            <p>如果需要它帮您看文件，粘贴之前<strong>把这些信息换成XXXX</strong>。</p>`
        },
        {
          titulo: "新型诈骗：克隆声音",
          html: `
            <p>有了AI，骗子只要用社交媒体上一段几秒钟的语音或视频，就能<strong>模仿您家人的声音</strong>。
            然后打电话或发语音消息给您：</p>
            <div class="caja-mal"><p>“奶奶，是我，我出车祸了，别告诉我妈。我现在急需您给我转钱。”</p></div>
            <p>警告信号永远是一样的：<strong>着急、保密、要钱</strong>。</p>`
        },
        {
          titulo: "假照片和假视频",
          html: `
            <p>AI还能做出<strong>非常逼真的假照片和假视频</strong>（叫做<em>“深度伪造”</em>），比如一位名人或知名医生在推荐神奇产品或投资。</p>
            <ul>
              <li>对<strong>好得不像真的</strong>优惠或神奇疗法要提高警惕。</li>
              <li>没有哪位名人会亲自给您发消息找您要钱。</li>
              <li>注意细节：嘴型和声音对不上、手看起来怪怪的、声音很单调。</li>
            </ul>`
        },
        {
          titulo: "您的防护计划",
          html: `
            <div class="caja-bien">
              <ol>
                <li><strong>停一停：</strong>不要着急行动。银行和家人都可以等五分钟。</li>
                <li><strong>挂断，由您自己打回去</strong>，打到您手机里存的那个人或银行的号码。</li>
                <li><strong>家庭暗号：</strong>和家人约定一个只有你们知道的秘密词（比如小时候养的宠物的名字）。
                如果有人以家人的名义要钱，就请对方说出暗号。</li>
                <li><strong>说出来：</strong>和别人聊聊遇到的诈骗，能保护所有人。这没什么丢人的：各个年龄的人都会遇到。</li>
              </ol>
            </div>`
        }
      ],
      recordar: [
        "绝不透露密码、银行卡、证件号码和住址。",
        "AI能模仿声音：着急＋保密＋要钱＝危险信号。",
        "挂断电话，自己打您手机里存的号码。",
        "和家人约定一个暗号。"
      ],
      preguntas: [
        {
          pregunta: "下面哪个信息可以放心告诉AI？",
          opciones: [
            "网上银行的密码。",
            "您喜欢做饭，想要无麸质的菜谱。",
            "您的信用卡号码。"
          ],
          correcta: 1,
          explicacion: "一般的爱好和喜好可以。密码和卡号绝对不行。"
        },
        {
          pregunta: "您收到一条语音，是孙子的声音，急着要钱还要您保密。您会怎么做？",
          opciones: [
            "赶快转钱帮他。",
            "挂断，自己打孙子的电话或打给他父母确认。",
            "把我的银行信息发给他。"
          ],
          correcta: 1,
          explicacion: "着急、保密和要钱是诈骗的信号。一定要自己打电话确认。"
        },
        {
          pregunta: "家庭暗号有什么用？",
          opciones: [
            "确认求助的人真的是家人。",
            "连接WiFi。",
            "解锁手机。"
          ],
          correcta: 0,
          explicacion: "声音可以被模仿，但你们约定的暗号只有你们知道。"
        },
        {
          pregunta: "您看到一段视频，一位知名医生在推荐一种神奇药丸。您怎么想？",
          opciones: [
            "这可能是AI做的假视频；我会提高警惕，去问我的医生。",
            "视频里说的就是真的。",
            "趁还没卖完赶紧买。"
          ],
          correcta: 0,
          explicacion: "“深度伪造”会模仿名人。神奇疗法本身就是一个危险信号。"
        }
      ],
      ejercicios: [
        {
          titulo: "我们的家庭暗号",
          pasos: [
            "给您最亲近的家人打电话或去看看他们。",
            "把您学到的关于克隆声音的知识告诉他们。",
            "一起约定一个没有出现在社交媒体上的暗号（不要用生日或大家都知道的名字）。",
            "把它记在安全的地方，不要存在手机里。"
          ],
          consejo: "这个练习能保护全家人。说不定您的子女和孙辈也能学到东西！"
        },
        {
          titulo: "是不是诈骗？",
          pasos: [
            "请AI帮忙：<span class=\"prompt\">给我举3个大家常收到的诈骗消息的例子，并告诉我怎么识别每一种。</span>",
            "读这些例子，找出其中的信号：着急、保密、要钱、奇怪的链接。",
            "看看您最近收到的消息：有没有类似的？"
          ],
          consejo: "如果对某条真实的消息拿不准，可以把文字粘贴过去（不带个人信息），问它：“这像不像诈骗？”但只要有疑问，就不要点链接，去问问别人。"
        }
      ]
    },

    // ───────────────────────────── 第4级 ─────────────────────────────
    {
      id: 9,
      nivel: 4,
      titulo: "AI内部是怎么运作的？",
      resumen: "简单了解AI怎么学习、为什么显得很聪明，以及它有哪些局限。",
      objetivos: [
        "用简单的方式理解AI助手是怎么学习的。",
        "明白它为什么有时会出错。",
        "认识新闻里常听到的几个词。"
      ],
      secciones: [
        {
          titulo: "靠大量阅读来学习",
          html: `
            <p>像ChatGPT、Gemini、Claude或DeepSeek这样的助手，是通过<strong>阅读海量的文字</strong>训练出来的：
            书籍、网页、文章。多到一个人读几千辈子也读不完。</p>
            <p>读了这么多，这个程序学会了<strong>词语通常是怎么组合的</strong>：一个词后面通常跟着哪个词，
            怎么回答问题，怎么写菜谱或写信。</p>`
        },
        {
          titulo: "接下句的游戏",
          html: `
            <div class="caja-ejemplo">
              <p>如果我说：<em>“只要功夫深……”</em>，您马上就能接上：<strong>“……铁杵磨成针”</strong>。</p>
              <p>AI做的事情也差不多：<strong>一个词接一个词地挑出最可能的那个</strong>，速度非常快，直到组成一个完整的回答。</p>
            </div>
            <p>所以它有时会出错：它挑的是<strong>听起来</strong>对的，不一定是<strong>真正</strong>对的。
            它不像人那样“知道”事情，它只是在识别规律。</p>`
        },
        {
          titulo: "新闻里会听到的词",
          html: `
            <dl class="glosario-lista">
              <dt>算法</dt><dd>一系列步骤或指令，就像菜谱一样，由电脑来执行。</dd>
              <dt>训练</dt><dd>用大量例子“教”AI的过程。</dd>
              <dt>语言模型</dt><dd>能理解和书写文字的一类AI。它是对话助手的“大脑”。</dd>
              <dt>生成式AI</dt><dd>能创造新东西的AI：文字、图片、音乐或视频。</dd>
              <dt>数据</dt><dd>AI用来学习的信息（文字、照片、数字）。</dd>
            </dl>`
        },
        {
          titulo: "它的局限（以及您为什么很重要）",
          html: `
            <ul>
              <li>它没有人生经历、没有回忆，也没有像您一样的常识。</li>
              <li>它可能重复学习材料中原有的错误或偏见。</li>
              <li>它不一定知道昨天发生了什么。</li>
            </ul>
            <p>您的<strong>人生经验、判断力和常识</strong>，正是AI所没有的。你们合在一起，就是一个好团队。</p>`
        }
      ],
      recordar: [
        "AI是通过阅读海量文字学会的。",
        "它一个词接一个词地挑出最可能的词来组成回答。",
        "所以它有时“听起来很对”，却是错的。",
        "您的经验和判断力正好弥补了AI的不足。"
      ],
      preguntas: [
        {
          pregunta: "像ChatGPT或Gemini这样的助手是怎么学会的？",
          opciones: [
            "通过阅读海量的文字。",
            "去上学。",
            "实时抄别人的回答。"
          ],
          correcta: 0,
          explicacion: "它用大量文字训练，学会了词语是怎么组合的。"
        },
        {
          pregunta: "AI为什么有时会出错？",
          opciones: [
            "因为它是故意的。",
            "因为它挑的是听起来对的，不一定是真正对的。",
            "因为手机太旧了。"
          ],
          correcta: 1,
          explicacion: "它识别的是词语的规律，不会像人一样去核实事实。"
        },
        {
          pregunta: "什么是“算法”？",
          opciones: [
            "一种病毒。",
            "一系列步骤或指令，就像菜谱一样。",
            "一个电脑品牌。"
          ],
          correcta: 1,
          explicacion: "算法就像电脑一步一步照着做的菜谱。"
        },
        {
          pregunta: "什么是“生成式AI”？",
          opciones: [
            "能创造新的文字、图片或音乐的AI。",
            "能发电的AI。",
            "只能在发电机上用的AI。"
          ],
          correcta: 0,
          explicacion: "对话式助手就是生成式AI的一个例子。"
        }
      ],
      ejercicios: [
        {
          titulo: "来玩接下句",
          pasos: [
            "给AI写：<span class=\"prompt\">我们来玩个游戏：我说一句俗语或歇后语的前半句，你来接后半句。</span>",
            "试试您家乡或您家里常说的俗语，也可以试试不太常见的。",
            "它接得对吗？有没有编造的？这样您就能亲眼看到它是怎么“预测”词语的。"
          ],
          consejo: "如果它编了一句俗语，您就近距离看到了一次“幻觉”！"
        },
        {
          titulo: "请它解释自己",
          pasos: [
            "问它：<span class=\"prompt\">请把你是怎么工作的解释给我听，就像我只有10岁一样。</span>",
            "然后问：<span class=\"prompt\">有哪些事情你做得不好？</span>",
            "和您在这一课学到的比较一下。"
          ],
          consejo: "“就像我只有10岁一样”这句话，可以用来请它把任何话题讲得简单一点。"
        }
      ]
    },

    {
      id: 10,
      nivel: 4,
      titulo: "我的AI个人计划",
      resumen: "把学到的都用起来：和家人联系、学习新东西、保存回忆的小项目。",
      objetivos: [
        "选出两三种真正对您有用的AI用法。",
        "从头到尾完成一个小小的个人项目。",
        "知道今后怎么继续学习。"
      ],
      secciones: [
        {
          titulo: "回顾走过的路",
          html: `
            <p>您已经来到最后一课了！我们来回顾一下学到的东西：</p>
            <ul>
              <li><strong>第1级：</strong>什么是AI、它在哪里、有哪些助手。</li>
              <li><strong>第2级：</strong>怎么提要求、日常用法、语音和摄像头。</li>
              <li><strong>第3级：</strong>核实信息、保护自己、保管好个人信息。</li>
              <li><strong>第4级：</strong>它内部是怎么运作的。</li>
            </ul>`
        },
        {
          titulo: "项目点子",
          html: `
            <div class="tarjetas-ideas">
              <div class="idea"><h4>📖 我的回忆录</h4><p>把您一生的故事讲出来，请AI帮您整理、誊写清楚，送给家人。</p>
                <p><span class="prompt">我来给你讲讲我是怎么认识我的老伴的。请帮我把它写成一篇小故事，尽量保留我原来的说法。</span></p></div>
              <div class="idea"><h4>🍲 家庭菜谱</h4><p>把家里的拿手菜整理成一本整齐的菜谱，材料和步骤都清清楚楚。</p>
                <p><span class="prompt">把我奶奶的这个菜谱整理成材料清单和编号的步骤：（口述菜谱）</span></p></div>
              <div class="idea"><h4>🌱 学点新东西</h4><p>一门语言、一个地方的历史、园艺或天文，有一位耐心的“老师”陪着您。</p>
                <p><span class="prompt">我想学阳台种花的基础知识。请连续一周，每天给我上一节短课。</span></p></div>
              <div class="idea"><h4>👨‍👩‍👧 和家人联系</h4><p>和孙辈一起玩的游戏、聊天话题或活动点子。</p>
                <p><span class="prompt">给我5个下雨天下午可以和8岁孙子一起做的活动点子，不用电子屏幕。</span></p></div>
            </div>`
        },
        {
          titulo: "我的黄金法则",
          html: `
            <div class="caja-bien">
              <ol>
                <li>提要求要清楚：要什么、给谁、什么样的。</li>
                <li>多交流：要求修改，直到有用为止。</li>
                <li>重要的事情要核实。</li>
                <li>绝不透露密码和个人信息。</li>
                <li>遇到着急＋保密＋要钱：挂断，自己打回去。</li>
                <li>把AI当帮手，拿主意的是我自己。</li>
              </ol>
            </div>`
        },
        {
          titulo: "怎么继续学习",
          html: `
            <ul>
              <li><strong>每天练一点</strong>：10分钟就够了。</li>
              <li>请AI自己出题：<span class="prompt">我是初学者。请给我出一个今天可以和你一起练习的小挑战。</span></li>
              <li>去社区中心、图书馆、老年大学或街道办事处找找相关的课程。</li>
              <li>把学到的教给别人：这是巩固知识最好的办法。</li>
            </ul>`
        }
      ],
      recordar: [
        "选出2到3种真正有用的用法，多加练习。",
        "可以做的项目：回忆录、菜谱、学新东西、和家人一起的活动。",
        "遵守您的黄金法则：说清楚、多交流、要核实、保护个人信息。",
        "每天练一点，是最好的学习方法。"
      ],
      preguntas: [
        {
          pregunta: "下面哪一个是继续学习的好方法？",
          opciones: [
            "每天练习几分钟。",
            "一年用一次。",
            "等别人替我做。"
          ],
          correcta: 0,
          explicacion: "经常练习，哪怕时间很短，帮助最大。"
        },
        {
          pregunta: "您想在AI的帮助下写回忆录。最好怎么做？",
          opciones: [
            "让AI编一个精彩的人生。",
            "把您的故事讲给它听，请它帮忙整理，并保留您原来的说法。",
            "抄别人的传记。"
          ],
          correcta: 1,
          explicacion: "AI帮您整理和誊写。故事和语气都是您自己的。"
        },
        {
          pregunta: "下面哪一条不是黄金法则？",
          opciones: [
            "重要的事情要核实。",
            "把密码告诉它，好让它帮得更快。",
            "拿主意的是我自己。"
          ],
          correcta: 1,
          explicacion: "密码和个人信息绝不能透露。"
        }
      ],
      ejercicios: [
        {
          titulo: "我的第一个项目",
          pasos: [
            "从四个项目点子里选一个（回忆录、菜谱、学新东西、和家人联系）。",
            "使用示例中的请求，按您的喜好修改。",
            "和AI至少来回交流3次来改进结果（更短一点、更温暖一点、加个细节……）。",
            "把结果保存下来，或分享给您爱的人。"
          ],
          consejo: "不用追求完美：目的是享受过程、勇敢尝试。"
        },
        {
          titulo: "我的一周练习计划",
          pasos: [
            "写下这周您要用AI做的3件具体的事（比如：星期一，列购物清单；星期三，学5个英语单词；星期五，给朋友写段话）。",
            "把清单贴在冰箱上或显眼的地方。",
            "周末时，把做过的打上勾，想想您最喜欢哪一个。"
          ],
          consejo: "恭喜您坚持到了这里！学完课程后，可以打印您的结业证书。"
        }
      ]
    }
  ],

  glosario: [
    { termino: "人工智能（AI）", definicion: "从大量例子中学习，来完成理解、写作或识别图像等任务的程序。" },
    { termino: "AI助手", definicion: "可以打字或说话来对话的软件：ChatGPT、Gemini、Copilot、Claude、Meta AI、DeepSeek、豆包等。" },
    { termino: "提示词（prompt）", definicion: "我们写给或说给AI的消息或请求。" },
    { termino: "对话", definicion: "一段文字聊天。“新对话”就是开始一段新的聊天。" },
    { termino: "语音输入", definicion: "把您说的话变成文字的功能。" },
    { termino: "幻觉", definicion: "AI编造了一个信息，并把它当成真的说出来。" },
    { termino: "深度伪造（deepfake）", definicion: "用AI做出的、模仿真人的假照片、假音频或假视频。" },
    { termino: "克隆声音", definicion: "用AI模仿某个人的声音，有时被用来诈骗。" },
    { termino: "算法", definicion: "电脑执行的一系列步骤，就像菜谱一样。" },
    { termino: "训练", definicion: "用大量例子教AI的过程。" },
    { termino: "语言模型", definicion: "能理解和生成文字的一类AI，是AI助手的“大脑”。" },
    { termino: "生成式AI", definicion: "能创造新内容的AI：文字、图片、音乐或视频。" },
    { termino: "垃圾邮件", definicion: "不想要的垃圾消息，电子邮件通常会自动把它们分出来。" },
    { termino: "隐私", definicion: "保护您的个人信息、自己决定和谁分享的权利。" }
  ]
};
