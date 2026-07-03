const menuBtn=document.querySelector("#menuBtn");
const nav=document.querySelector("#nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

    });

}

const form=document.querySelector("#contact-form");

    if(form){

        form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name=document.querySelector("#name").value;
        const email=document.querySelector("#email").value;
        const subject=document.querySelector("#subject").value;
        const message=document.querySelector("#message").value;

        if(name===""||email===""||subject===""||message===""){

            alert("すべての項目を入力してください。");
            return;
        }
        alert("送信はデモです。");
        form.reset();
    });
}