<template>
  <div class="flex flex-row pb-6 last:pb-0">
    <div class="flex-none pr-4 pt-2">
      <img class="w-16 rounded-full" :src="'https://picsum.photos/64/64/?random='+i" alt="Author">
    </div>
    <div class="flex-auto">
      <div class="text-xl">Петр Первый</div>
      <p class="text-sm pb-2">
        Таким образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие
        в формировании дальнейших направлений развития. Повседневная практика показывает, что консультация с широким
        активом в значительной степени обуславливает создание системы обучения кадров, соответствует насущным
        потребностям. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке
        соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры
        требуют от нас анализа систем массового участия. Повседневная практика показывает, что дальнейшее развитие
        различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного
        развития.
      </p>
      <btn tag="button">Ответить</btn>
    </div>
  </div>
</template>

<script>
  import btn from '../btn'
  export default {
    name: "Comment",
    props: {
      i: {type: Number, required: true}
    },
    components: {
      btn
    }
  }
</script>

<style scoped>

</style>
