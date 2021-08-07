<template>
                <!-- Profile Card -->
                <div class="profile-card mb-">
                    <div class="card bg-primary shadow-soft border-light">
                        <div class="card-body">
                            <div class="profile-image bg-primary shadow-inset border border-light rounded-circle p-1">
                            <img src="public\assets\img\team\profile-picture-5.jpg" class="card-img-top rounded-circle" alt="Avatar">
                            </div>
                            <h3 class="h5 mb-2"><br/>Create/Upload</h3>
                            <span class="h6 font-weight-normal text-gray mb-3">Its time to give your opinion</span>
                            <br/><br/>
                            <input type="Title" class="form-control1" placeholder="Give a Title" id="CaseTitle" aria-describedby="Title">
                            <br/>
                            <textarea class="form-control1" placeholder="Enter your Opinion..." id="Opinion" rows="4"></textarea>
                            <br/>
                            <label for="GiveTags">Enter the Tags</label>
                            <input type="Tags" class="form-control1" placeholder="Add Tags separated by ," id="GiveTags" aria-describedby="Tags">
                            <br/>
                            <label for="Mentions">Mention the People</label>
                            <input type="Mentions" class="form-control1" placeholder="Mention People using @" id="Mentions" aria-describedby="Mentions">
                        </div>

                        <div class="card-footer">
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
                            <button type="submit" class="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
           
              <!-- End of Profile Card -->

</template>

<script>
export default ({
    name: 'Create',
})
</script>
<style scoped>
.form-control1 {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.2rem + 0.0625rem);
    padding: 0.6rem 0.75rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #44476A;
    background-color: #e6e7ee;
    background-clip: padding-box;
    border: 0.0625rem solid #D1D9E6;
    border-radius: 0.55rem;
    transition: all 0.3s ease-in-out;
}
</style>
