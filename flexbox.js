const panels = document.querySelectorAll('.panel');
    
        function toggleOpen() {
          this.classList.toggle('open');
        }
    
        function toggleActive(e) {
          if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
          }
        }/*간단히 말해서 css전환이 있을떄 생성되는데 여기서 open에서 일어나는게 flex란 관련이있으면 실행 toggle는 변환 씹가능*/
    
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));