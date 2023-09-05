<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>

  <div v-else>
    <p>Jobs Loading....</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.massege));
  },
};
</script>

<style>
.job h2 {
  background: #e9e2e2;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #bababa;
}

.job a {
  text-decoration: none;
}
</style>