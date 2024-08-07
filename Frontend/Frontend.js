const Form = document.getElementById("form");
const Imageinput =document.getElementById("upload")
const uploadbutton = document.getElementById("Upload");
const OutPut = document.getElementById("output");
const Download =document.getElementById("download")

Imageinput.addEventListener("change",(e)=>{
const file= e.target.files[0];
console.log(file)
const filename=URL.createObjectURL(file);
OutPut.setAttribute('src',filename)
})
uploadbutton.addEventListener("click",(event)=>{
    event.preventDefault();

    const file=Imageinput.files[0];
    if(file){
        const formData =new FormData();
        formData.append("imageInput",file)
        const Response = fetch("http://localhost:5080/Upload", {
            method: "POST",
      
            body: formData,
          }).then((response) => console.log(response))
          .then((data) => {
            OutPut.setAttribute("src", data.data),
              Download.setAttribute("href", data.data); // Parse JSON from response
    })
    }
})