(() => {
  const STORAGE_KEY = 'santiago-solidaria-demo-v1';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  $('#year').textContent = new Date().getFullYear();
  function openModal(id) { const modal=document.getElementById(id); if(!modal)return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; setTimeout(()=>$('input,select,textarea',modal)?.focus(),80); }
  function closeModal(modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); if(!$('.modal-backdrop.open'))document.body.style.overflow=''; }
  $$('[data-open]').forEach(button=>button.addEventListener('click',()=>openModal(button.dataset.open)));
  $$('.modal-close').forEach(button=>button.addEventListener('click',()=>closeModal(button.closest('.modal-backdrop'))));
  $$('.modal-backdrop').forEach(backdrop=>backdrop.addEventListener('click',event=>{if(event.target===backdrop)closeModal(backdrop);}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('.modal-backdrop.open'))closeModal($('.modal-backdrop.open'));});
  const menuButton=$('#mobileMenu');
  menuButton.addEventListener('click',()=>{const nav=$('#mainNav');const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
  $$('#mainNav a').forEach(link=>link.addEventListener('click',()=>{$('#mainNav').classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
  function readRecords(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');}catch{return[];}}
  function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');window.setTimeout(()=>toast.classList.remove('show'),3600);}
  function handleForm(form,type,collect){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const payload={id:window.crypto?.randomUUID?.()||'local-'+Date.now(),type,createdAt:new Date().toISOString(),...collect(data)};try{const records=readRecords();records.push(payload);localStorage.setItem(STORAGE_KEY,JSON.stringify(records));$('.form-feedback',form).textContent='Registro salvo neste navegador. Esta demonstração ainda não envia os dados para uma equipe.';form.reset();showToast('Registro salvo nesta demonstração.');window.setTimeout(()=>closeModal(form.closest('.modal-backdrop')),2200);}catch{$('.form-feedback',form).textContent='Não foi possível salvar neste navegador. Verifique o armazenamento disponível.';}});}
  const checkedValues=(data,key)=>data.getAll(key);
  handleForm($('#requestForm'),'pedido',data=>({name:data.get('name').trim(),phone:data.get('phone').trim(),neighborhood:data.get('neighborhood').trim(),needs:checkedValues(data,'needs'),details:data.get('details').trim()}));
  handleForm($('#volunteerForm'),'voluntario',data=>({name:data.get('name').trim(),phone:data.get('phone').trim(),neighborhood:data.get('neighborhood').trim(),skills:checkedValues(data,'skills'),availability:data.get('availability')}));
  handleForm($('#donationForm'),'doacao',data=>({name:data.get('name').trim(),phone:data.get('phone').trim(),category:data.get('category'),details:data.get('details').trim()}));
})();
