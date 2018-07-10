<template>
    <div>
      详情

      <a :href="obj.href">{{obj.title}}</a>
      <button @click="back()">返回</button>
    </div>
</template>

<script>

    export default {
        name: "detail",
      methods:{
        back(){
          this.$router.push("/home")
        }
      },
      data:function(){
        return {
          newslist:[

            {"id":1,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"申冬奥代表团凯旋 机场举行欢迎仪式 ",
              "author":"女神的新衣1",
              "des":"这是献给申冬奥代表团凯旋 机场举行欢迎仪式的",
              "href":"http://www.beijing-2022.cn/a/20150803/016154.htm#p=3"
            },
            {"id":2,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"北京获2022年冬奥会主办权 创造历史 ",
              "author":"女神的新衣2",
              "des":"这是献给北京获2022年冬奥会主办权 创造历史",
              "href":"http://www.beijing-2022.cn/a/20150803/019642.htm"
            },
            {"id":3,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"北京申冬奥代表团举办招待会庆祝申办成功 ",
              "author":"女神的新衣3",
              "des":"这是北京申冬奥代表团举办招待会庆祝申办成功",
              "href":"http://www.beijing-2022.cn/a/20150801/011057.htm"
            },
            {"id":4,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"刘延东率申冬奥代表团出席国际奥委会128届全会开幕式 ",
              "author":"女神的新衣4",
              "des":"这是刘延东率申冬奥代表团出席国际奥委会128届全会开幕式",
              "href":"http://www.beijing-2022.cn/a/20150731/021724.htm"
            },
            {"id":5,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"刘延东率申冬奥代表团出席国际奥委会128届全会开幕式 ",
              "author":"女神的新衣4",
              "des":"这是刘延东率申冬奥代表团出席国际奥委会128届全会开幕式",
              "href":"http://www.beijing-2022.cn/a/20150731/021724.htm"
            },
            {"id":6,
              "src":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530691595&di=25984c04563cdcfccd8cfefe98986dfe&src=http://d.hiphotos.baidu.com/zhidao/pic/item/bf096b63f6246b60bfac143de9f81a4c500fa2dd.jpg",
              "title":"刘延东率申冬奥代表团出席国际奥委会128届全会开幕式 ",
              "author":"女神的新衣4",
              "des":"这是刘延东率申冬奥代表团出席国际奥委会128届全会开幕式",
              "href":"http://www.beijing-2022.cn/a/20150731/021724.htm"
            }
          ],
          obj:{}
        }
      },
      created:function(){
        var id = localStorage.getItem("id")
          for( var i = 0;i<this.newslist.length;i++){
            if(id == this.newslist[i].id){
              this.obj = this.newslist[i]
            }

          }
      }
    }
</script>

<style scoped>

</style>
