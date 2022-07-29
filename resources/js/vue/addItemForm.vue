<template>
    <div class="miItem">
        <input type="text" v-model="item.name">
        <font-awesome-icon
            icon="plus-circle"
            @click="addItem()"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return
            }

            axios.post("api/item/store", {
                item: this.item
            }).then(response => {
                if (response.status == 201) {
                    this.item.name = "";
                    this.$emit("reloadlist")
                }
            }).catch (error => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>

    .miItem {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        background: #f7f7f7;
        border: 0px;
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }

    .plus {
        font-size: 20px;
    }

    .active {
        color: #00CE25;
    }

    .inactive {
       color: #999999;
    }
</style>
