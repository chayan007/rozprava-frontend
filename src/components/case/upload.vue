<template>
                <!-- Button Modal -->
                <button type="submit" class="btn btn-primary mr-2" data-toggle="modal" data-target="#modal-default">Upload</button>
                <!-- Modal Content -->
                <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="h6 modal-title mb-0" id="modal-title-default">Upload</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
             
                            </div>
                            <div class="modal-footer">
                            
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Modal Content -->
</template>

<script>

export default ({
    name:'Upload'
})
</script>
<style scoped>
.modal1 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}
</style>