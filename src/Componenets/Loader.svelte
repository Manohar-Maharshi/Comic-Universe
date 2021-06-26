
<div class="content">
   <div class="loading">
<p>loading</p>
      <span></span>
   </div>
</div>
<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .loading {
  width: 9rem;
  height: 50px;
  position: relative;
}
.content .loading p {
  top: 0;
  padding: 0;
  margin: 0;
  margin-top: -1rem;
  color: #FFE019;
  font-family:inherit;
  animation: text 2s ease both infinite;
  font-size: 1.5rem;
  letter-spacing: 1px;
}
@keyframes text {
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }
  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }
  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }
  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
}
.content .loading span {
  background-color: #FFE019;
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: loading 3s ease both infinite;
}
.content .loading span:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #FFE019;
  border-radius: inherit;
  animation: loading2 3s ease both infinite;
}
@keyframes loading {
  0% {
    width: 16px;
    transform: translateX(0px);
  }
  40% {
    width: 100%;
    transform: translateX(0px);
  }
  80% {
    width: 16px;
    transform: translateX(64px);
  }
  90% {
    width: 100%;
    transform: translateX(0px);
  }
  100% {
    width: 16px;
    transform: translateX(0px);
  }
}
@keyframes loading2 {
  0% {
    transform: translateX(0px);
    width: 16px;
  }
  40% {
    transform: translateX(0%);
    width: 80%;
  }
  80% {
    width: 100%;
    transform: translateX(0px);
  }
  90% {
    width: 80%;
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0px);
    width: 16px;
  }
}
</style>