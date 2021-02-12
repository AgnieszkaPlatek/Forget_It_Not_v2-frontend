<template>
  <section class="my-4 mx-1">
        <h1 class="h4 mb-5 ml-3">Filter flashcards from <b>{{ set.name }}</b></h1>
        <div class="filter fluid-container mb-4">
            <form method="GET">
                <div class="class=row col-12 mb-md-2">
                    <label for="min_date" class="h6 col-lg-2 text-left pt-2">{% translate 'from date:' %}</label>
                    <input type="date" id="min_date" name="min_date" placeholder="{% translate 'dd/mm/yyyy' %}" class="ml-2 col-5 col-md-4">
                </div>
                <div class="class=row col-12">
                    <label for="max_date" class="h6 col-lg-2 text-left pt-2">{% translate 'to date:' %}</label>
                    <input type="date" id="max_date" name="max_date" placeholder="{% translate 'dd/mm/yyyy' %}" class="ml-2 col-5 col-md-4">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>

        <div class="container mb-4 mt-5">
            <table class="table table-hover col-12">
                <tbody>
                    <tr v-for="flashcard in flashcards" :key="flashcard.id">
                        <td>
                        <router-link
                            :to="{ name: 'FlashcardDetail', params: { id: flashcard.id } }"
                            >{{ flashcard.back }} &minus; {{ flashcard.front }}</router-link
                        >
                        </td>
                        <td>
                        <small>{{ flashcard.added }}</small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="fluid-container">
            {% if flashcards %}
            <div class="col-12 mx-1">
                <form method="POST">
                    <button class="btn btn-square btn-learn d-inline-block btn-lg mb-2" type="submit" name="learn"
                            value="learn">LEARN
                    </button>
                </form>
            </div>
            {% endif %}
            <div class="row col-12 ml-1">
                <div class="col-4 offset-4">
                </div>
                <router-link :to="{ name: 'FlashcardList' }"
                   class="btn btn-back btn-square btn-sm d-inline-block col-4" role="button"
                   aria-pressed="true">Back</router-link>
            </div>
        </div>
</template>

<script>
export default {
  name: "FlashcardListFilter",
};
</script>

<style>
</style>