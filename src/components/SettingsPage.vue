<template>
  <div style="text-align: center;">
    <h3 style="margin-top: 7rem; font-size: 2rem;">Settings</h3>
  
  <div class="mt-4">
            
                <h3 style="font-size: 1.3rem; margin-right:7rem;">Change Profile Picture</h3>
                <h3 style="font-size: 1.3rem; margin-right:13rem;">Change BIO</h3>
                <h3 style="font-size: 1.3rem; margin-right:5.3rem;">Change <a href="#" style="color: green;">Profile Password</a></h3>
                <span style="display: inline-flex;">
                  <h3 style="font-size: 1.3rem; margin-right: 8.8rem; margin-left: 1rem;">Social Link</h3>
                  <div style="">
                    <img src="https://user-images.githubusercontent.com/83393749/121353904-fd0ab680-c94b-11eb-8c81-a4b8ffac5a14.png"/> 
                    <img src="https://user-images.githubusercontent.com/83393749/121784049-4b7bb780-cbcf-11eb-913a-c47cc60d7831.png"/>
                    <img src="https://user-images.githubusercontent.com/83393749/121353888-f9772f80-c94b-11eb-9776-b7f4a5e003b5.png"/> 
                  </div>
                </span>
                <h3 style="font-size: 1.3rem; margin-right:9rem;">Change Username</h3>
                <span style="display: inline-flex; margin-left: -11.5rem;">
                <h3 style="font-size: 1.3rem; margin-right: 1rem;"><a href="#" style="color: green;">Advanced</a></h3>
                <div class="btn-group mb-2 mr-2">
                            <button type="button" class="btn btn-tertiary dropdown-toggle dropdown-toggle-split togglebtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="fas fa-angle-down dropdown-arrow"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 44px, 0px);">
                                <a class="dropdown-item" href="#">Edit D.O.B</a>
                                <a class="dropdown-item" href="#">Update Contact</a>
                                <a class="dropdown-item" href="#">Update Address</a>
                                <a class="dropdown-item" href="#">Update Profession</a>
                                <a class="dropdown-item" href="#">Update Gender</a>
                                <a class="dropdown-item" href="#">Update Relationship Status</a>
                            </div>
                            </div>
                </span>
                
                  
                  <div class="card card-sm card-body bg-primary border-light mb-0" style="border: 0rem; padding: 0%;">
                        <a href="#panel-4" data-target="#panel-4" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="panel-1">
                            <span class="icon-title h6 mb-0" style="color: green; font-size: 1.3rem; margin-right: 1rem;">Advanced</span>
                            <span class="icon" style="margin-right: 90rem;"><span class="fas fa-angle-down dropdown-arrow "></span></span>
                        </a>
                        <div class="collapse show" id="panel-4" style="">
                            <div class="row pt-3">
                              <p>
                                <a href="#" style="margin-right: 5.7rem;">Edit D.O.B</a><br>
                                <a href="#" style="margin-right: 3.3rem;">Update Contact</a><br>
                                <a href="#" style="margin-right: 3.1rem;">Update Address</a><br>
                                <a href="#" style="margin-right: 2.1rem;">Update Profession</a><br>
                                <a href="#" style="margin-right: 3.5rem;">Update Gender</a><br>
                                <a href="#" style="margin-left: 1.9rem;">Update Relationship Status</a>
                              </p>
                            </div>
                        </div>
                    </div>
                  
                </div>
                  </div>
                  
        
  
</template>

<script>
export default {
  name: "SettingsPage",
};
</script>

<style scoped>
.togglebtn {
  padding: 0%;
}
</style>