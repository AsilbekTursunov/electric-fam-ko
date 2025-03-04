<template>
  <!-- <MiniPopups 
    :open="true" 
    :description="'조회 결과가 없습니다.'" 
    :title="'결과'"
    :type="'notice'" 
    :onCancel="() => console.log('blu blu')" 
  /> -->
  <CustomDialog :open="open" :title="title">
    <div class="form-content">
      <div class="description">{{ description }}</div>
      <div class="cancellation-btn">
        <div>
          <custom-button 
            v-if="type == 'notice' || type == 'confirm'"
            class="secondary" 
            :size="'md'" 
            :onClick="onCancel">취소</custom-button>
        </div>
        <div> 
          <custom-button 
            class="primary" 
            :size="'md'" 
            :onClick="onCheck">확인</custom-button>
        </div>
      </div>
    </div>
  </CustomDialog>
</template>

<script>
export default { 
  name: 'MiniPopups',
  data() { 
    return { 
    }
  }, 
  props: {
    open: { type: Boolean },
    title: { type: String },
    description: { type: String },
    onCancel: Function,
    onCheck: Function,
    type: String
  } 
}
</script>

<style lang="scss" scoped>
.dialog_content{  
  .form-content { 
    width: 300px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    .description{
      flex: 1;
      overflow-y: auto;
    }
    .cancellation-btn{
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>