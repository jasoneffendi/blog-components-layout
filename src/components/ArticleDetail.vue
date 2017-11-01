
<template>
<div>
  <a href="#" class="list-group-item">
    <div class="row">
      <div class="col-md-4">
        <img :src="article.photo" class="img-responsive"/>
      </div>
      <div class="col-md-8">
        <router-link :to="'/blog/' + article.id">
          <h4 class="list-group-item-heading">
            {{ article.title }}
          </h4>
        </router-link>
        <p class="list-group-item-text">
          {{ article.content.substring(0, 150) }} . . .
        </p>
      </div>
    </div>
  </a>
  <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {
        title: '',
        content: '',
        photo: ''
      }
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/api/articles/' + this.id)
      .then(({data}) => {
        console.log(data)
        this.article = data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>