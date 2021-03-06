let a = {
  "errno": "0",
  "errmsg": "success",
  "data": {
    "title": "欢迎使用预约服务",
    "sub_title_list": [
      "提前锁定车辆",
      "专车无车赔付"
    ],
    "title_color_style": 1,
    "back_img": "xxxxxxxxxxxxxx",
    "brief_desc": {
      "desc_title": "快速了解宝贝专车",
      "right_img": "xxxxxxxxxxxx",
      "img_jump_url": "xxxxxxxxxxxx",
      "desc_list": [
        "配备德国品牌Cybex儿童座椅，儿童座椅界的劳斯莱斯",
        "宝贝安全有保障",
        "适合9个月到12岁儿童使用"
      ]
    },
    "detail_desc": {
      "desc_title": "我们将提供您专属的安全服务",
      "desc_list": [{
          "item_icon": "xxxxxxxxxx",
          "item_title": "行程关怀宝",
          "item_desc": "全业务尊享",
          "item_url": "xxxxxx"
        },
        {
          "item_icon": "xxxxxxxxxx",
          "item_title": "提拿行李",
          "item_desc": "全业务尊享",
          "item_url": "xxxxxx"
        },
        {
          "item_icon": "xxxxxxxxxx",
          "item_title": "接机引导服务",
          "item_desc": "专车尊享",
          "item_url": "xxxxxx"
        }
      ]
    },
    "law_desc": {
      "title": "欢迎使用代叫车",
      "sub_title_list": [{
          "content": "未成年人乘车需由监护人陪同",
          "icon_url": "",
          "h5_url": ""
        },
        {
          "content": "乘车人行程中违反平台规则{《专快豪华车服务协议》}，代叫车人需承担连带责任",
          "icon_url": "https://pt-starimg.didistatic.com/static/starimg/img/GCv8l1tboY1581567484724.png",
          "h5_url": "https://dpubstatic.udache.com/static/dpubimg/dpub2_project_10297/index_10297.html"
        }
      ]
    },
    "bg_color": {
      "start_color_1": "#DAE9F7",
      "end_color_1": "#FFFFFF",
      "start_color_2": "#DAE9F7",
      "end_color_2": "#FFFFFF"
    }
  }
}


 type aa = {
  errno: string,
  errmsg: string,
  data: {
    title: string,
    sub_title_list: string[],
    title_color_style: number,
    back_img: string,
    brief_desc: {
        desc_title: string,
        right_img: string,
        img_jump_url: string,
        desc_list: string[]
    },
    detail_desc: {
      desc_title: string,
      desc_list: {
          item_icon: string,
          item_title: string,
          item_desc: string,
          item_url: string,
      }[]
    },
    law_desc: {
      title: string,
      sub_title_list: {
          content: string,
          icon_url: string,
          h5_url: string,
      }[]
    },
    bg_color: {
        start_color_1: string,
        end_color_1: string,
        start_color_2: string,
        end_color_2: string,
    }
  }
}