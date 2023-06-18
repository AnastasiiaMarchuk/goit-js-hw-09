document.querySelector("[data-start]").addEventListener("click",(function(){t||(t=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),console.log("👌"))})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),t=null}));let t=null;
//# sourceMappingURL=01-color-switcher.ea91c28b.js.map
