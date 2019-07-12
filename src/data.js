import hzty from './assets/logo_hzty.png';
import txdata from './assets/logo_txdata.png';
import jxyq from './assets/bg.png'; //此公司已关闭，放个空白图片上去
import bootplus from './assets/bootplus.png';
import springboot_mybatisplus from './assets/springboot_mybatisplus.png';
import fastjson_spring_boot_starter from './assets/fastjson-spring-boot-starter.png';
import webkettle from './assets/webkettle.png';
import anires from './assets/anires.png';
import ibooks from './assets/ibooks.png';
import blog from './assets/blog.png';
import myBook from './assets/myBook.png';

import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sWeiBo from './assets/s_wb.svg';
// import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
// import sJj from './assets/s_Jj.svg';
import SGitee from "./assets/s_gitee.svg"
import SJianshu from "./assets/s_jianshu.svg"
import SCSDN from "./assets/s_csdn.svg"

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [{
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['23岁', '本科', '杭州', '在职'],
      quote: '不浮躁，不偏激，爱编程，爱后端，爱新技术，爱运动，执行力和学习能力都棒棒哒！',
      desList: ['我叫周思伟，Java软件工程师', '杭州特扬网络科技有限公司', '2434387555@qq.com']
    },
    skill: {
      outCircleList: [{
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'SpringBoot'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'SpringCloud'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'RabbitMQ'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(172,223,159,0.8)'
          },
          name: 'Linux'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: '小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Vue'
        }
      ],
      innerCircleList: [{
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'MySQL'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'GitHub'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Nacos'
        }
      ],
      desList: [
        '我叫周思伟，23岁，坐标杭州，是一名Java软件工程师，三年Java EE 从业经验。',
        '熟悉软件开发的整个流程，有较强的逻辑思维能力',
        '主要涉及技术：Java后端开发、聚合支付、公众号开发、开源爱好者、Linux',
        '有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控'
      ],
      links: [{
        title: '● Github',
        des: 'https://github.com/JoeyBling',
        url: 'https://github.com/JoeyBling'
      }, {
        title: '● 技术笔记',
        des: 'https://zhousiwei.gitee.io/ibooks/',
        url: 'https://zhousiwei.gitee.io/ibooks/'
      }]
    },
    exp: {
      expList: [{
          title: '杭州特扬网络科技有限公司',
          time: '2019年4月~至今',
          post: '技术部/Java软件工程师',
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: ['使用高并发，多线程为(互联网+医疗)提供解决方案', '负责编制与产品或项目相关的技术文档', '使用Linux命令完成日常系统的部署及维护工作']
        },
        {
          title: '江西三叉数信息科技有限公司',
          time: '2017年12月~2019年3月',
          post: '技术部/Java软件工程师',
          img: {
            backgroundImage: `url(${txdata})`
          },
          contentList: ['使用SSM、SpringCloud、Nacos、VueJS等前沿开发技术', '获得过公司颁发并盖章的优秀员工荣誉证书奖', '与前端开发人员进行功能接口对接，解决测试人员提出的 bug']
        },
        {
          title: '江西益强微盈信息科技有限公司',
          time: '2016年6月~2017年11月',
          post: '技术部/Java软件工程师',
          img: {},
          contentList: ['参加讨论相关项目需求、概要设计，并完成核心代码编写', '使用SpringBoot、SpringMVC、Mybatis进行开发', '对代码持续重构优化，对系统不足进行分析，提高系统性能']
        }
      ]
    },
    works: {
      worksList: [{
          title: 'bootplus',
          des: '基于SpringBoot + Shiro + MyBatisPlus的权限管理框架',
          url: 'https://gitee.com/zhousiwei/bootplus',
          img: {
            src: `${bootplus}`,
            alt: '基于SpringBoot + Shiro + MyBatisPlus的权限管理框架'
          },
        },
        {
          title: 'SpringBoot集成MyBatisPlus',
          des: 'SpringBoot集成MyBatisPlus集成Shiro可以快速开发',
          url: 'https://gitee.com/zhousiwei/springboot_mybatisplus',
          img: {
            src: `${springboot_mybatisplus}`,
            alt: 'SpringBoot集成MyBatisPlus集成Shiro可以快速开发'
          }
        },
        {
          title: 'fastjson-spring-boot-starter',
          des: '自制spring boot starter for fastjson',
          url: 'https://gitee.com/zhousiwei/fastjson-spring-boot-starter',
          img: {
            src: `${fastjson_spring_boot_starter}`,
            alt: '自制spring boot starter for fastjson'
          }
        },
        {
          title: 'webkettle',
          des: '基于web版kettle开发的一套分布式综合调度,管理,ETL开发的用户专业版B/S架构工具',
          url: 'https://github.com/JoeyBling/webkettle',
          img: {
            src: `${webkettle}`,
            alt: '基于web版kettle开发的一套分布式综合调度,管理,ETL开发的用户专业版B/S架构工具'
          }
        },
        {
          title: 'anires',
          des: '一个会动的简历',
          url: 'https://zhousiwei.gitee.io/anires/index.html',
          img: {
            src: `${anires}`,
            alt: '一个会动的简历'
          }
        },
        {
          title: 'ibooks',
          des: 'VuePress记录技术开发笔记',
          url: 'https://zhousiwei.gitee.io/ibooks',
          img: {
            src: `${ibooks}`,
            alt: 'VuePress记录技术开发笔记'
          }
        },
        {
          title: '个人博客网站',
          des: '試毅-思伟的技术博客网站',
          url: 'https://zhousiwei.gitee.io/',
          img: {
            src: `${blog}`,
            alt: '試毅-思伟的技术博客网站'
          }
        },
        {
          title: 'myBook',
          des: '使用GitBook记录开发笔记',
          url: 'https://joeybling.github.io/myBook',
          img: {
            src: `${myBook}`,
            alt: '使用GitBook记录开发笔记'
          }
        }
      ],
      viewMore: '前往GitHub上查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['喜欢尝试，期待新鲜事物', '编程即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [{
          title: 'HTML版',
          url: ''
        },
        {
          title: 'PDF版',
          url: ''
        }
      ],
      typeList: [{
          title: 'GitHub',
          icon: sGithub,
          url: 'https://github.com/JoeyBling'
        },
        {
          title: '码云',
          icon: SGitee,
          url: 'https://gitee.com/zhousiwei'
        },
        {
          title: '个人博客',
          icon: sBlog,
          url: 'https://zhousiwei.gitee.io'
        },
        {
          title: '简书',
          icon: SJianshu,
          url: 'https://www.jianshu.com/u/02cbf31a043a'
        },
        {
          title: 'CSDN',
          icon: SCSDN,
          url: 'https://blog.csdn.net/qq_30930805'
        },
        {
          title: '知乎',
          icon: sZh,
          url: 'https://www.zhihu.com/people/joeybling'
        },
        {
          title: '微博',
          icon: sWeiBo,
          url: 'http://weibo.com/jayinfo'
        }
      ],
      links: [{
        title: '● 开发笔记',
        des: 'https://zhousiwei.gitee.io/ibooks',
        url: 'https://zhousiwei.gitee.io/ibooks'
      }]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [{
          svg: dHome,
          title: 'home'
        },
        {
          svg: dSkills,
          title: 'skills'
        },
        {
          svg: dExp,
          title: 'exp'
        },
        {
          svg: dWorks,
          title: 'works'
        },
        {
          svg: dContact,
          title: 'contact'
        }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['23years', 'B.S.', 'Hangzhou', 'On Job'],
      quote: 'Not impetuous, not extreme, love programming, love back end, love new technology, love sports, execution and learning ability are awesome!',
      desList: ['My name is Zhou siwei, a Java software engineer', 'Hangzhou TEYANG network technology co., LTD', '2434387555@qq.com']
    },
    skill: {
      outCircleList: [{
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'SpringBoot'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'SpringCloud'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'RabbitMQ'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(172,223,159,0.8)'
          },
          name: 'Linux'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'miniP'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Vue'
        }
      ],
      innerCircleList: [{
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'MySQL'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'GitHub'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Nacos'
        }
      ],
      desList: [
        'My name is Zhou siwei, 23 years old, located in hangzhou, and I am a Java software engineer with three years of Java EE experience.',
        'Familiar with the whole process of software development, with strong logical thinking ability',
        'Mainly involved in technology: Java back-end development, aggregation payment, public account development, open source enthusiasts, Linux',
        'Good documentation and code writing skills, able to solve problems independently, persistent and detail-oriented'
      ],
      links: [{
        title: '● Github',
        des: 'https://github.com/JoeyBling',
        url: 'https://github.com/JoeyBling'
      }, {
        title: '● Technical Notes',
        des: 'https://zhousiwei.gitee.io/ibooks/',
        url: 'https://zhousiwei.gitee.io/ibooks/'
      }]
    },
    exp: {
      expList: [{
          title: 'Hangzhou TEYANG network technology co., LTD',
          time: '2019.04-Now',
          post: 'Technical department /Java software engineer',
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: ['Using high concurrency, Multithreading provides solutions for (Internet + healthcare)', 'Responsible for technical documentation related to product or project', 'Use Linux command to complete daily system deployment and maintenance work']
        },
        {
          title: 'Jiangxi 3xData information technology co. LTD',
          time: '2017.12-2019.03',
          post: 'Technical department /Java software engineer',
          img: {
            backgroundImage: `url(${txdata})`
          },
          contentList: ['Using SSM, SpringCloud, Nacos, VueJS and other cutting-edge development technologies', 'Excellent employee certificate awarded and sealed by the company', 'Interface with front-end developers to solve bugs raised by testers']
        },
        {
          title: 'Jiangxi yiqiang weiying information technology co., LTD',
          time: '2016.06-2017.11',
          post: 'Technical department /Java software engineer',
          img: {},
          contentList: ['Participate in the discussion of related project requirements, outline design, and complete the core code writing', 'Development with SpringBoot, SpringMVC and Mybatis', 'Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance']
        }
      ]
    },
    works: {
      worksList: [{
          title: 'bootplus',
          des: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus',
          url: 'https://gitee.com/zhousiwei/bootplus',
          img: {
            src: `${bootplus}`,
            alt: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus'
          },
        },
        {
          title: 'SpringBoot integration MyBatisPlus',
          des: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development',
          url: 'https://gitee.com/zhousiwei/springboot_mybatisplus',
          img: {
            src: `${springboot_mybatisplus}`,
            alt: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development'
          }
        },
        {
          title: 'fastjson-spring-boot-starter',
          des: 'Spring boot starter for fastjson',
          url: 'https://gitee.com/zhousiwei/fastjson-spring-boot-starter',
          img: {
            src: `${fastjson_spring_boot_starter}`,
            alt: 'Spring boot starter for fastjson'
          }
        },
        {
          title: 'webkettle',
          des: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools',
          url: 'https://github.com/JoeyBling/webkettle',
          img: {
            src: `${webkettle}`,
            alt: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools'
          }
        },
        {
          title: 'anires',
          des: 'A dynamic resume',
          url: 'https://zhousiwei.gitee.io/anires/index.html',
          img: {
            src: `${anires}`,
            alt: 'A dynamic resume'
          }
        },
        {
          title: 'ibooks',
          des: 'Record technical development notes with VuePress',
          url: 'https://zhousiwei.gitee.io/ibooks',
          img: {
            src: `${ibooks}`,
            alt: 'Record technical development notes with VuePress'
          }
        },
        {
          title: 'Personal blog site',
          des: 'My blog site',
          url: 'https://zhousiwei.gitee.io/',
          img: {
            src: `${blog}`,
            alt: 'My blog site'
          }
        },
        {
          title: 'myBook',
          des: 'Use GitBook to record development notes',
          url: 'https://joeybling.github.io/myBook',
          img: {
            src: `${myBook}`,
            alt: 'Use GitBook to record development notes'
          }
        }
      ],
      viewMore: 'Check out more on My GitHub'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Like to try, look forward to something new',
        'Programming is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download resume',
      fileList: [{
          title: 'HTML',
          url: ''
        },
        {
          title: 'PDF',
          url: ''
        }
      ],
      typeList: [{
          title: 'GitHub',
          icon: sGithub,
          url: 'https://github.com/JoeyBling'
        },
        {
          title: 'Gitee',
          icon: SGitee,
          url: 'https://gitee.com/zhousiwei'
        },
        {
          title: 'Blog',
          icon: sBlog,
          url: 'https://zhousiwei.gitee.io'
        },
        {
          title: 'Jianshu',
          icon: SJianshu,
          url: 'https://www.jianshu.com/u/02cbf31a043a'
        },
        {
          title: 'CSDN',
          icon: SCSDN,
          url: 'https://blog.csdn.net/qq_30930805'
        },
        {
          title: 'ZhiHu',
          icon: sZh,
          url: 'https://www.zhihu.com/people/joeybling'
        },
        {
          title: 'WeiBo',
          icon: sWeiBo,
          url: 'http://weibo.com/jayinfo'
        }
      ],
      links: [{
        title: '● Development Notes',
        des: 'https://zhousiwei.gitee.io/ibooks',
        url: 'https://zhousiwei.gitee.io/ibooks'
      }]
    }
  }
};