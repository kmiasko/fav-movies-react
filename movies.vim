let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/workdir/fav-movies-react
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +6 src/App.js
badd +18 src/components/MoviesCollection/index.jsx
badd +12 src/components/PagerPanel/index.jsx
badd +12 src/components/ControlPanel/index.jsx
badd +26 src/components/ItemsCountSelect/index.jsx
badd +20 src/components/FavoritesSelect/index.jsx
badd +19 src/components/SortOrderSelect/index.jsx
badd +14 src/components/LayoutSelect/index.jsx
badd +27 src/components/MovieListItem/index.jsx
badd +29 src/components/MovieCard/index.jsx
argglobal
silent! argdel *
argadd ~/workdir/fav-movies-react
edit src/App.js
set splitbelow splitright
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 77 - ((27 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
77
normal! 025|
lcd ~/workdir/fav-movies-react
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
