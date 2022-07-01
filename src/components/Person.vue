<template>
    <div>
        <h1>姓名: {{ person.name }}</h1>
        <h1>地址: {{ person.address }}</h1>
        <button @click="showName">点击我</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Person",
    data() {
        return {
            person: {
                name: "刘子阳",
                address: "石家庄市",
            },
        }
    },
    methods: {
        showName() {
            alert(this.person.name + "你好");
        },
    }
};
</script>

<style scoped>

</style>