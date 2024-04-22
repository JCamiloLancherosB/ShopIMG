const fs = require('fs');
const path = require('path');

const oldPath = '/ruta/al/archivo.txt';
const newPath = '/ruta/destino/archivo.txt';

// Mover el archivo a otro directorio
const rename = fs.rename(oldPath, newPath, (err) => {
    if (err) {
        console.error('Error al mover el archivo:', err);
        return;
    }
    console.log('Archivo movido correctamente.');
});


export default rename;


/* 
 https://youtu.be/ZfLJVRw-Dqc?si=IUMZ4BWXiv_rQCiI
 https://youtu.be/8vDtNjV6-Ac?si=k9IY9ibYwRaWXsKP
 https://youtu.be/cdq1xFlwst4?si=TmosNHp6627DboGJ
 https://youtu.be/oxVeBVTugfk?si=FuPBhyVJXJHfjpm5
 https://youtu.be/nYoGMLeqlSs?si=_gvE2qYmwdFoHKjU
 https://youtu.be/1NobmbvMAJU?si=oNTY3yjpDiN9W6at
 https://youtu.be/6D1lZXzYCfA?si=wqFJYPiGjQa6j-El
 https://youtu.be/YQa-7atAhl8?si=lrkJ3zbhhqvAVrH1
 https://youtu.be/59jl-Uw6jxw?si=kbjhQgNBV8vtz4G9
 https://youtu.be/GfBSxBo3nos?si=ncEVYsCuEo_pNnT7
 https://youtu.be/mGdGOJZ3A4w?si=ssA6AhwRjaP002Nj
 https://youtu.be/rszHTX1iHzg?si=BLaC7z9ajakPFgHV
 https://youtu.be/XnsRfaarQis?si=_MkAtsJpI9Q98wEF
 https://youtu.be/vFQPyAZFcK8?si=yz3Edxz7gC4filbc
 https://youtu.be/2IfncSE_tXg?si=KwsEEC3z1bdQl7c5
 https://youtu.be/xIqrpBXkUVc?si=Ru_foFRywA4f0HxG
 https://youtu.be/jqp68SlMFcE?si=Y0YMeatdCLI2jzfD
 https://youtu.be/7feL_mhgp2U?si=g-p5ZNcIKLv_CgeG
 https://youtu.be/NNhQyJ0bQY8?si=wwOOJG4VWnUlNlWp
 https://youtu.be/3qT2J4FOGd8?si=FWuOdvlvfSmphLQg
 https://youtu.be/nnVOXvEzYjY?si=h3OFpjYpg4LLpJR1
 https://youtu.be/lIWZP50gOQo?si=4BmG-UynGnx2olnY
 https://youtu.be/lJSyJPxoqvY?si=MaUVSBtcKNV1Ky7D
 https://youtu.be/rM2nykk6N2Q?si=XxGbtR7m_Q6PyjMb
 https://youtu.be/sbjGVjyrIdU?si=AHk_5H1vAGkOV5wu
 https://youtu.be/6UwqXh-dFFo?si=zH8mUcu6VdD0FQCC
 https://youtu.be/pbAg5v_0Kz8?si=oOsMGM_BwvKyX19Y
 https://youtu.be/61E0mTYhlZI?si=62-yHs7m9uli-PxH
 https://youtu.be/JuDtpxkFT2I?si=YtzWbFDLKG9P5hMt
 https://youtu.be/a2PubDn0b0k?si=3uYprErxTTYWsFzz
 https://youtu.be/ad3xPY2uCkY?si=uNHwwmjcP-kLR3t6
 https://youtu.be/8JH3BoHBpg0?si=tJ9wbxhnQcoCwKIG
 https://youtu.be/O7NWI2AYvT0?si=xoKqzh3FXDc2rtaP
 https://youtu.be/jZ8whTxAoIw?si=QCeWdc-2kCAi4bXA
 https://youtu.be/6hgMpqhzWqo?si=dq5LifLETQSeuGuk
 https://youtu.be/5oZhCFzZiQ0?si=ys53ULarXPmanTlR
 https://youtu.be/zfVbcwHMz0Y?si=4j1oBXZGc8-TW68L
 https://youtu.be/xyrxiRF9_Zs?si=tUpeyyohLeXgDYpS
 https://youtu.be/EO1UynUFA3k?si=8xZDFeU2TPwa73KV
 https://youtu.be/leKYF8LJx5E?si=CJOwHaaTLedmaJyo
 https://youtu.be/pogfogjMwzU?si=HTjrAmEeZPuM5CRB
 https://youtu.be/ERbY6o-z3ys?si=bY0se7u3sRVqMESc
 https://youtu.be/4xIXpt28R7M?si=lqsmJhbpiHaiBQs0
 https://youtu.be/PuzFNrqC7q0?si=RJj76HDaVC1NZ71j
 https://youtu.be/jtMTSLrcIPQ?si=C-SEFm_OS_W2VHWU
 https://youtu.be/eZ7OX77o7TM?si=cCDFLbZUE8JDJ5U7
 https://youtu.be/dxEGIkHyULY?si=HN3OpBJ-aVgv4u1-
 https://youtu.be/UG7XshHK45E?si=YsKkApnp6f8ooCMe
 https://youtu.be/MjWrEwNJy50?si=fI2hHNEgSOJui134
 https://youtu.be/vTrFRD0_Zk8?si=0_LEv_hJamn52VdV
 https://youtu.be/LmxneEeaETo?si=jPPpy7sB5omSYQWs
 https://youtu.be/Hf9uDwB49Pk?si=OSDg_qjunrthm1HP
 https://youtu.be/ATHBYwXzE2Y?si=tpW0u4WSMZJJX5gP
 https://youtu.be/bPM31yVQmbg?si=D9II0G-LlaDZtg4w
 https://youtu.be/WBYMgfCNGQk?si=h1W6DdA-0kmGdc93
 https://youtu.be/qW-hI7Zmgog?si=pCOBinYY3m3ovc4i
 https://youtu.be/SreIKVKyxms?si=VavlL3Epam_ULLEO
 https://youtu.be/uK-4HjDknjc?si=WFR0zTKn-aDJYn8O
 https://youtu.be/cDJ802ll2LA?si=Mj1Xz4g59eKKI6va
 https://youtu.be/PWIxfn0_laI?si=Qm2nRHq_cHL5fNps
 https://youtu.be/sALoi6EauH8?si=s4BQHWJIbZ_cn9mj
 https://youtu.be/h9WqY5jcF1o?si=oMyb1RNGFwKabXwG
 https://youtu.be/O1Wj04T8fR4?si=b5J7_FvtHHdQykK9
 https://youtu.be/zbjbC-5LdC4?si=0gHhvXOImWvWSx1F
 https://youtu.be/TGrMFOrBJh0?si=qrnPMs98gJwyVkuO
 https://youtu.be/Tnlwz9NDeD4?si=wM4M8j0FH2nxC-rj
 https://youtu.be/5q-2HrB8wQ4?si=x2Ghvfw5uG8ojO3R
 https://youtu.be/NTIDmep8lpM?si=x-HoA4hJ0uxwXzpu
 https://youtu.be/Use4CPWoGfI?si=5F4vT6kuyrrwFzlo
 https://youtu.be/Hf_m5qyd3WI?si=c3c1g683KsPmVc8d
 https://youtu.be/FUf2-WFowCY?si=3JUZCTnS2fWEEqu8
 https://youtu.be/pZEHtmjJRrQ?si=hRE06bCENQtdiEfp
 https://youtu.be/mJXRR-hW-Pc?si=Flf0YtQNbGH2_UTb
 https://youtu.be/Zhfoae9Gm9w?si=oi_a8VEgjM5GKkYx
 https://youtu.be/cUQZILrshZw?si=4skF5dlgI8-cUbPT
 https://youtu.be/cHpstCaQaTI?si=IS44krBG-QA8zs2y
 https://youtu.be/mR1sHw293m8?si=ZuBo_VF9IIyQBZnc
 https://youtu.be/cGCfBn8B4PM?si=NFbxy8HUQwhKjeDV
 https://youtu.be/BwE4VaCg8cM?si=LLvPSPnQYB3XqNd3
 https://youtu.be/3K3JrIoPHmc?si=cyjBla5We5VyPT2L
 https://youtu.be/1emOgSvUpAo?si=K59CkkTfWastowZV
 https://youtu.be/miQA770QSlQ?si=UJMkmVXQl3mY3MLP
 https://youtu.be/rs3ey2zb2do?si=O2YSLLhLepHCLIJ3
 https://youtu.be/iugDnQdx-4M?si=a6nB2QgV-zfYOR0Z
 https://youtu.be/ab8V7HaTfQ4?si=n9w_WURLhe7ZjHNv
 https://youtu.be/XF03cms6NcQ?si=zaV6GQ57zrHCi7Ih
 https://youtu.be/Lmuda1jrzok?si=nz7N0oYcMnJZfRCG
 https://youtu.be/rDqbFcuoERk?si=N5K_T6cc3HEioIGo
 https://youtu.be/WhnkevnIUng?si=Ems3oGnvbB7ailhE
 https://youtu.be/i-LAquVt-9s?si=EU23x0UlHBl9u4rl
 https://youtu.be/l3374PB-Cr4?si=6Cv_3yjjQyh1IuV5
 https://youtu.be/YsPcZ5uZoaE?si=pqot66lodXiK0pzx
 https://youtu.be/eVPgoitieKs?si=ry1e-VZw53s6z9ni
 https://youtu.be/B_sklOLuGWg?si=DE7NW7LfcqEP6DHl
 https://youtu.be/nbhmcDkTR3E?si=UNi1XgmezCUYAYsD
 https://youtu.be/qm6D2KcWrQ0?si=QDYZQjFNUTp67OOm
 https://youtu.be/ZfLJVRw-Dqc?si=IUMZ4BWXiv_rQCiI
 https://youtu.be/8vDtNjV6-Ac?si=k9IY9ibYwRaWXsKP
 https://youtu.be/cdq1xFlwst4?si=TmosNHp6627DboGJ
 https://youtu.be/oxVeBVTugfk?si=FuPBhyVJXJHfjpm5
 https://youtu.be/nYoGMLeqlSs?si=_gvE2qYmwdFoHKjU
 https://youtu.be/oqJp8_w6sGw?si=rP7ES79q4N8XQxnr
 https://youtu.be/1NobmbvMAJU?si=oNTY3yjpDiN9W6at
 https://youtu.be/6D1lZXzYCfA?si=wqFJYPiGjQa6j-El
 https://youtu.be/YQa-7atAhl8?si=lrkJ3zbhhqvAVrH1
 https://youtu.be/nbiY8p5VfHI?si=RXnj0xSPaMACaKTP
 https://youtu.be/lIWZP50gOQo?si=mze1R9yIVhxGihth
 https://youtu.be/h9ISVq2hNn8?si=r7Od2BPp9gBrLTJI
 https://youtu.be/_C59ZqeTK-c?si=_fpDtWlfVQk3sILQ
 https://youtu.be/Qr3l9z2-yGg?si=rrCCBkoKlVq7xe4v
 https://youtu.be/Pq455-PPc8c?si=GMaSvaPATbecfTdY
 https://youtu.be/6ceZVih2R9k?si=Q8p5f9YAkK5OWc9Z
 https://youtu.be/Hfhmxlifw3A?si=imJM9BqJYlhaw8FE
 https://youtu.be/h2U66lywypU?si=FatiDkA8ONi_BGfy
 https://youtu.be/EU8u9t42kbI?si=gxo6XAL9ovE6S2-e
 https://youtu.be/K6g-NsLGXnY?si=SktMmeBwLHg6FjZ1
 https://youtu.be/N74jG_TgymU?si=eWiljD2EDWRHX1Z6
 https://youtu.be/PtlsltgLYSg?si=tX_Ufnyd4jImTrl4
 https://youtu.be/Mf18mEHzNwo?si=TzERnIhjSepKQAmt
 https://youtu.be/ReKZ64o2SCY?si=-5s2P9jR5eMPScJN
 https://youtu.be/_HeM5dBObVI?si=TdbqtC4FR5_HUydu
 https://youtu.be/bPOvJUjyI8c?si=PtXZNVYfp05IS8SM
 https://youtu.be/_7FIflYF3Ms?si=E8RsnvtwLV8qLL8D
 https://youtu.be/B56Xq4vj2pA?si=b9bvpbjhzvV_b-7r
 https://youtu.be/Uq8fEpgZFi0?si=l6fygjvY4roxmIcV
 https://youtu.be/D_uz2MgsodM?si=tha7xd4kY7AXUCjd
 https://youtu.be/3B1-mDQLLHs?si=_ZeojrzMasgRAjhN
 https://youtu.be/CThUiHrbM90?si=v8iC4gfnOaHv6HTB
 https://youtu.be/gtq7MX9C_10?si=extfzX0GyIuICe4V
 https://youtu.be/Gq_gvJFEaP0?si=r0kEy14UkPF1us6-
 https://youtu.be/DemLZ-5kveQ?si=ffwil06zRZCOHhf2
 https://youtu.be/OG2VEI0yPW8?si=ERBfBWeN5Ybpg0xd
 https://youtu.be/xOKMHxQFIWE?si=w23yIqkUryUzYrTu
 https://youtu.be/Qap4ShiH7pw?si=gTHPGReuuE74bAwZ
 https://youtu.be/J3OtzDWBwOo?si=eIeFzCXhOXBaohZC
 https://youtu.be/AzILL8yIbcQ?si=XUBuOe7YpgH5HU5M
 https://youtu.be/09839DpTctU?si=ClXp6pWSv7PIN7BK
 https://youtu.be/kK_9ykC5xwA?si=btHeDGG4u8zqrYyD
 https://youtu.be/1P3Mg82bWww?si=X25aW88GoRd7eRrb
 https://youtu.be/mQ2jMeU5ogo?si=SeOPx5WKN2CI2Ru_
 https://youtu.be/SKV6zQyeJeo?si=9tXhK27IuwUGfFMu
 https://youtu.be/_pSGNh7G9YQ?si=PX48H2Xt9_XCcxpy
 https://youtu.be/ln3EEK8f4vc?si=9P9T5bMHzIrqGLCi
 https://youtu.be/cA28NiCF_-g?si=hPsqJrDNz9yXh41C
 https://youtu.be/Fo5FbUYAvtw?si=yLOlH7Xu5LAVyhTb
 https://youtu.be/9l6_Ap05c7Q?si=t7ZOJ3kUWcrbgPyB
 https://youtu.be/WEx2lxTYc-o?si=Mp0v-hoKJBb0zwKU
 https://youtu.be/QeNGYwNa40I?si=ZJM9Xu1PMkiwd-F2
 https://youtu.be/VsS7duxV89Q?si=VQ3B9m3o22mZsdmG
 https://youtu.be/jM6Dk_u3oBY?si=C5pxZouFQP3MVNQX
 https://youtu.be/D_uz2MgsodM?si=IyFgRYoAW37ELMtU
 https://youtu.be/tbuRbnyx_iA?si=oQXUWw2h0U-meg_v
 https://youtu.be/sfrimArGWgA?si=WppNQytusyFoa5Pf
 https://youtu.be/rErGCo1GpTI?si=mKiVyVCOHNjNREEu
 https://youtu.be/cuZlb2b4fdk?si=_xAZx88GdDglfI1p
 https://youtu.be/T2zEyLXYI3g?si=vpQXxEHLj8zutEgn
 https://youtu.be/4qo1tZmDQWs?si=b5mZHIqHxoLKwGhi
 https://youtu.be/Ce6I4nIE46E?si=JSDUVYMcE90S1aJ-
 https://youtu.be/kK_9ykC5xwA?si=g7LDuFPVFowgEStJ
 https://youtu.be/eSFTwdyHWd4?si=inUJ58rQJRbTHaw-
 https://youtu.be/qDLTFLtkhes?si=4yuWt6WhcuYAn4aW
 https://youtu.be/BFlEOIGa1r0?si=6RrwajEoGW_uSHZ3
 https://youtu.be/3upEM9S2IrI?si=3rR-YGRC0R2XQvTG
 https://youtu.be/rYVR5aBFpHg?si=LR1Ci3URNikbzCgt
 https://youtu.be/QZooTI1GHF0?si=bEKtTyZOyDW9DBFN
 https://youtu.be/vvRf_M5VDD8?si=qKGgqNzvRsO7iPVR
 https://youtu.be/xF27cnrGxmg?si=CjtOb2MbCxLyOM0F
 https://youtu.be/ZrIbHMFuQ-c?si=JxvpJuOsnQNSFb2X
 https://youtu.be/m4U8CXEBfSo?si=cOocXy9z00G93a3j
 https://youtu.be/mMmQKuIQ8XA?si=tXDl3bGZyro46waE
 https://youtu.be/g2jA5VjbaE0?si=dK5y-HLNcOFmv6wK
 https://youtu.be/z_n7QQ_3Gg4?si=qUKq5Hua4mQk9P84
 https://youtu.be/toSzbVGqeM0?si=1ViHh8pO0CPQPogU
 https://youtu.be/oxfu4wguIuM?si=SD0jwmrWTbaTXJPU
 https://youtu.be/31F4jhynBd4?si=_BD3dRUJYaqg-mQu
 https://youtu.be/99qhB9YGbnc?si=oT3-CQaXkV_7WNy7
 https://youtu.be/GV6ZR8jU-NQ?si=IE1dRVVuT5NpNKCv
 https://youtu.be/Jrh0InWNMJk?si=7ijlbFMTQDsJ6rfX
 https://youtu.be/m2YAGa1UZXk?si=Fn_ut1RKlk1zoO-x
 https://youtu.be/iM73KIrsOf8?si=0NIzyxv2S1uMYZPk
 https://youtu.be/LD6esU77Wro?si=U5aI4T3OnwUwG28Z
 https://youtu.be/YcrG-CQb1JM?si=7z69ES6BRB7Fm7J2
 https://youtu.be/tnUazXx7WK8?si=xgwq0llZWntH2WTy
 https://youtu.be/z9k7Bs3D5IQ?si=1kSWllGTLzCpVsC5
 https://youtu.be/ZnFhczO_oQw?si=sKYiX_qkushOw1xg
 https://youtu.be/lPl1b4J4YkU?si=HnwmTZPyoW9t5_Nq
 https://youtu.be/BwiavyNaUNI?si=tw_OxUFvh2FQwNfJ
 https://youtu.be/Spa6qOwQIi4?si=l6zvdKp6vEvfGRpC
 https://youtu.be/MelsaezuzFY?si=QJOpZ9sTJOUO_TrY
 https://youtu.be/aMlFrWUKTzQ?si=nBrAq-5xunbtnQwa
 https://youtu.be/TaC1L9Vyy_c?si=6AXjBzj1TmQh2uZU
 https://youtu.be/uGUy_88iGTw?si=luwd9BixIIZUbKiQ
 https://youtu.be/3lxxEymhHAQ?si=yd2dFV4GNJFX1c_1
 https://youtu.be/W4Zovbs413w?si=F3fYf6kWXxqTTB_t
 https://youtu.be/SjnThRYAMHU?si=6cy9Um5cbh5YN1fW
 https://youtu.be/jI__x1NS7fc?si=qlMHqxIgudI0ikrP
 https://youtu.be/rVABgUSQFu0?si=LUBF8wCZyUiN95dg
 https://youtu.be/gzoGoSNcIEk?si=w54M72mncaUU0eC1
 https://youtu.be/IUDM6Wjx9HU?si=8_QrvPn44cgvFzqN
 https://youtu.be/WgiXEjqvcjg?si=hkHhCIzKsq6J309k
 https://youtu.be/Leu_8lMMGWk?si=GkhquI1ja9xCBmfX
 https://youtu.be/rzIZIkoSzNc?si=ioYjrOVINu5IArGb
 https://youtu.be/yJvoN3upSSE?si=NnWfkgPab6ltlJwP
 https://youtu.be/d5um89eoXVA?si=zx7cZePsPn0wrjGo
 https://youtu.be/UldlNCwGH5c?si=OBnlIaul1DozgDxR
 https://youtu.be/1wAklw9UWSI?si=fQXvNybGwELLSybG
 https://youtu.be/T-xdMVVALgI?si=tLYE1UO8YG8tXxG5
 https://youtu.be/s7yX0msAGuo?si=HNCCqYJ7D_jYKeHV
 https://youtu.be/HxzDf3Izbj8?si=JLvOYP0K8DiofR_e
 https://youtu.be/C46C0aHz1KE?si=fx5qGXlepUtH7AtU
 https://youtu.be/I_3xOrJbhFs?si=FlyjyGR294wxgQDc
 https://youtu.be/wIMcvF1GPZ4?si=I32LvOhHxxOB9brF
 https://youtu.be/lFVIf8kwpr8?si=iMaR_WB_HvS-I0MH
 https://youtu.be/Z1dz8StoKuI?si=pTf6w-y1IzEt2z82
 https://youtu.be/RDt71oH8kFQ?si=w0orrFu52tHbt893
 https://youtu.be/Eo5dUwmhlyM?si=Hl6mbF7YLq93_GT3
 https://youtu.be/Ld2cDBlp7Lk?si=YCCvbT0boyLYqCh8
 https://youtu.be/mkPKDjzBRJ0?si=pKzCXAU1N23cLLrT
 https://youtu.be/kBO0SSV600Q?si=8u4WWIAQPujyndeg
 https://youtu.be/6fEppa7WyFQ?si=vn7nfBIYt3p4W9jS
 https://youtu.be/-CZ3EeNsm2Y?si=4zOi7wkcxACEnSrb
 https://youtu.be/Y0GBCcLHzVo?si=OpFgQHJLPgrF4iYj
 https://youtu.be/-HEll1ib8GU?si=_Dq55VEmdC9P0sqf
 https://youtu.be/rxqhYXAiD88?si=ZdqLBZ0wvjkxzPVA
 https://youtu.be/NocW20IDmtA?si=Lr_0zwf8Nk0yyNL4
 https://youtu.be/gi4sZ0uFOG8?si=35bDOkn5Ba3dKHLN
 https://youtu.be/sNXQ36JqCiU?si=T5F7slY3krf019P0
 https://youtu.be/H4UmEl2vjrg?si=nM7JSVY5GAkuHSht
 https://youtu.be/KuAU9yjlnGE?si=n43eBFtWnx9G7Qrv
 https://youtu.be/2C9R8gtbuws?si=XSKZZxEZGtpF24rr
 https://youtu.be/Jf0EC0-SInE?si=Mpf1XBBE80b0CAdm
 https://youtu.be/Cw3TUqZZA1I?si=zsYAxWPlnMR9FnLo
 https://youtu.be/QCeQ07TXTsI?si=XDqAY0t8knR_yEV4
 https://youtu.be/vBLonzMEaGQ?si=c-tIxUju13fsU6kV
 https://youtu.be/uzbBFF1nk2A?si=aPlOSsef5egjtpZk
 https://youtu.be/Yq17gJ8hZNU?si=7tNtxGlV3YIXD2F_
 https://youtu.be/p9-1QaC37u0?si=BsqOYvi7kdcMseNM
 https://youtu.be/OTDt0f0vHMo?si=PacvvryhtrC7uuUk
 https://youtu.be/K4XAskt0r4M?si=ne9Epd5bPdjL5-t-
 https://youtu.be/a2IgKOdhEpA?si=rf-9q85PSdGSb0Xz
 https://youtu.be/nhEG5SBd_kA?si=4ACyEUQRFgSZixqC
 https://youtu.be/d6hvd_oyz7g?si=OVmNnWh7JbTXuOCw
 https://youtu.be/FVsbqTKHsaU?si=O6CDpwWuxHhvQuGR
 https://youtu.be/n2FGb1_H_Ok?si=sctN6FMCSv_V45wo
 https://youtu.be/jx5zUatwP3Y?si=31ecCcVuFdLgHmVV
 https://youtu.be/hJaHfIsWoQw?si=oX5hHa1k-gpK_o88
 https://youtu.be/BBodN5qdk_E?si=mYYn6Mn0ikjq0fzw
 https://youtu.be/Of4VtsNzGoY?si=OLgwBd8l1ctA2_9o
 https://youtu.be/ubuHUJtcAAo?si=rJGvrrI4JxSjjNHF
 https://youtu.be/SKIdeu_IS_E?si=5UOiXJGpglWRZk4q
 https://youtu.be/ne2x1qGYpLI?si=eAfi2dcJhxG-qlgQ
 https://youtu.be/359olhg6NWQ?si=es6o_eOk_QTdKhLE
 https://youtu.be/FkZnPD3_0K4?si=yvzsI97SG6P__AND
 https://youtu.be/uLtXpyYX3y0?si=ZuucKmU0hHZbdpgV
 https://youtu.be/EVCTUdvYGXw?si=qCmi0T59hc_y9OmI
 https://youtu.be/kcPtCcwipjU?si=rGCWWu_DVfWR0XsK
 https://youtu.be/MskxD1upuR8?si=V5mh16J5NI2MHZ1h
 https://youtu.be/lCVYPK8ckOE?si=Lm_W-nNV0yAEyQZb
 https://youtu.be/Z_P5oo6ymHk?si=tMr2T0UV9CvpUyAs
 https://youtu.be/9GaGKuB5k24?si=hEHFMEB1v14H0m2R
 https://youtu.be/416oB67Lvsk?si=hUwo91i0_q5dKO52
 https://youtu.be/HoYWrww29Is?si=JdorCoKUwElgm65W
 https://youtu.be/K3rkgz4Qr5k?si=crUAlLWI-aN4Z7ol
 https://youtu.be/KYsaRDRkfjA?si=cbjsk0gCkjYP6co-
 https://youtu.be/d4ITMLBXT1Y?si=XCv7h1w_JxJB4Iu4
 https://youtu.be/m8ZxpAa8QZk?si=5vgl4TMoQXOo3Phz
 https://youtu.be/nSVRC2wFKaw?si=gabbSOu7DMASTpdK
 https://youtu.be/lOJdI37m3es?si=lJTJuNNYsWcrKPzV
 https://youtu.be/ToqOd2WWZ28?si=gOo3RzSO0NSExP5Z
 https://youtu.be/7Doost1vwjQ?si=F9iWICeW2k4a_t08
 https://youtu.be/cIVFkYf-eFQ?si=7C8H2XiG-MumsagU
 https://youtu.be/o6tmNVN7iko?si=ODtCoG8wVkN2Zwcp
 https://youtu.be/5B2Tw1ljJdg?si=KqjRWm7jo7U4CYQT
 https://youtu.be/R2HqeYdzB3k?si=XEmP5bo6mAxpzBzD
 https://youtu.be/UCHcuyYGwj0?si=zgzY7p_lOnqkUnj7
 https://youtu.be/gu0ezn8lFwU?si=irsQlH2qeuAh6x9h
 https://youtu.be/GRjVpjZAseM?si=kCq3KU0awhUOxXiN
 https://youtu.be/mhMOzjuctLw?si=ZNTbYWmfHzQsBpYE
 https://youtu.be/GpWzM6tw1pM?si=4B81xcYA1cPbkcuo
 https://youtu.be/wsMbsiUQRXc?si=zzyp3A5tqM97Hx5B
 https://youtu.be/glhkgXsB6KE?si=a83xvN-qFv0q1ECR
 https://youtu.be/7d0A2I9jYjY?si=4IQm0Es7ZKhXg9xZ
 https://youtu.be/V0iddDnyby4?si=vNjI2YS84RB0SCX3
 https://youtu.be/Cgmc5N3kUDQ?si=-Yu2R4yBckUOhaD-
 https://youtu.be/yLNuaAHipHU?si=X6k-T2RK1xEVLF3N
 https://youtu.be/C8C3d8Ty4T4?si=vZfXlyJO2ialIkzj
 https://youtu.be/GilB5_uyRB0?si=jWU67lUZgsPEV-AN
 https://youtu.be/H2KVFCUheCw?si=qfLI5uy_Qeghoipt
 https://youtu.be/b-XNMopKlBY?si=2E0YPETFpQnY5xWE
 https://youtu.be/svzM__XNJhA?si=_0C-5UXfXUH8cYb8
 https://youtu.be/rjALbT2VR94?si=TMSv-kOrScqjZq_o
 https://youtu.be/qh8ZS6fqkEc?si=IVgsT7orO8FIZwv3
 https://youtu.be/jd1aae3tjEY?si=T66OcsClDzn2EgX4
 https://youtu.be/OreL2FsF8Ao?si=qdvqsVVU1k-V-dcc
 https://youtu.be/D3cnfI8JlPk?si=siiaMUjVbxF5xtWP
 https://youtu.be/nN2a6Ms3fiU?si=tp2hz6z1v-RUMxjk
 https://youtu.be/kItRyRv0uJM?si=DX98O3SHTjuGRng9
 https://youtu.be/_tKkosBOeVI?si=To1q0M3E57mL6uA3
 https://youtu.be/BCJfwYDxb6Q?si=BtQe5W4JLhZTXHAb
 https://youtu.be/V9tRkzGpLZQ?si=fF9Pizi-yMaS7f_I
 https://youtu.be/CO1wD7lHNqU?si=JX0sZMcuhU3epIzb
 https://youtu.be/GeVOCi0Xob8?si=In3UzE56qS96pSNG
 https://youtu.be/odbr-verIpc?si=ybLMpBb3Bwxdli0f
 https://youtu.be/SZu-HYtxMJU?si=FXaFct_LA_Q7tiCb
 https://youtu.be/mQ2jMeU5ogo?si=uEjPOtvUV2M-_0QZ
 https://youtu.be/6qCFDCtS9s0?si=OkoF7eflHun0zXGM
 https://youtu.be/oTLAWS3R-DY?si=Bi-dSLm8BFEU4a15
 https://youtu.be/chPzbZ6AuYs?si=HGUfnzsOUZIG13GV
 https://youtu.be/C-c7lSsEAzg?si=ezq94udSJ_o6nd1z
 https://youtu.be/Qut38W0s678?si=c5DR3IHEier8uMqq
 https://youtu.be/JeZyVwU_RQc?si=RSvLSDkdJ2_uesnD
 https://youtu.be/BTOXSBkxXYo?si=Z4RGrMuTbokjhYbP
 https://youtu.be/cHSMQw11sjs?si=-NsgeklApkrwkzjy
 https://youtu.be/UBk7owrnJUo?si=PszJxF4hAW9cHH4R
 https://youtu.be/99qhB9YGbnc?si=OLo1ekHmKlqgnS9n
 https://youtu.be/aeYBdxz3xP4?si=GG1Apj3OsksmH2ps
 https://youtu.be/EDIwdwwHVtk?si=ktixgY0dFpt9-L5h
 https://youtu.be/grs4I5njkrE?si=RtEwOFGwnd0NLfPK
 https://youtu.be/YidnD1ZyCbI?si=y1OqHA75hkaa2iLD
 https://youtu.be/Y7QgppuMn_Q?si=Kf0-WQuMM8flxiUw
 https://youtu.be/_FWSzNbUwSI?si=RFKWSz1cchd5zlKj
 https://youtu.be/lBbcFMOEIlY?si=nWHeAe3YZQ6GV7PE
 https://youtu.be/W_bYpZr6YCM?si=i_XdMi1ZHzulKsEE
 https://youtu.be/sf8wvEYqx84?si=JAPU0GBBDMgO7gBc
 https://youtu.be/YxDlmAxQ3os?si=XBggloN7E-VFAR6x
 https://youtu.be/4QXfdPcM9Xk?si=FJ3xD_FsJtVPsjrm
 https://youtu.be/GPllrqtQmxI?si=IIMx02A_Nr0oBJwZ
 https://youtu.be/hnacJIPjwR0?si=DsZrDQTjvlr0qkZf
 https://youtu.be/k_yz_OzO1yc?si=YtECyoCO4kG6avl1
 https://youtu.be/Use4CPWoGfI?si=zIXL0wITus6-2_P2
 https://youtu.be/OhEF5f1n_XY?si=nrlkZCVQDxRPj49-
 https://youtu.be/l83yrpd5kyc?si=oOKWEsiRMI5jqqxq
 https://youtu.be/BBxnW6Y18VA?si=jCqK1ugFSfuSolg3
 https://youtu.be/C9o44a8dZXI?si=RTcPZt9to4TpATHY
 https://youtu.be/DV8tLf4mQZk?si=taWGe_W1c1h69pWH
 https://youtu.be/ZbxnDaWYl9o?si=8ZWLbLktQTxE-kKa
 https://youtu.be/yWvuMVr9-WE?si=W0BWqWCOy1c8S_hA
 https://youtu.be/5t1fWXcX3Aw?si=aiiIoxsyNjWWUoIS
 https://youtu.be/RjyUR3T0_X4?si=u9MFrCu13KDhgrX5
 https://youtu.be/cU51JB91WG0?si=AjOp3a3qpAFTIL6E
 https://youtu.be/HThwascSkzA?si=DlUzPZ4rQDNYEBpJ
 https://youtu.be/ejliCJBY57k?si=y4P6Tq_eZe6jMUf6
 https://youtu.be/nabAl7dacik?si=CXXSwEeU9EEzN0t_
 https://youtu.be/3qe8yBHkPpQ?si=DxxwPsormu-8wP4v
 https://youtu.be/ScRN3yp8LzQ?si=bzXpggoeYAu7jt6A
 https://youtu.be/bbVXcPHoa2c?si=HkogGLA-RZvUAz1S
 https://youtu.be/LGxMarEKy2g?si=KqxmU_Insd4OVrtM
 https://youtu.be/zNm6iD_TK6E?si=giXF5Ji1omiCDcRL
 https://youtu.be/AZhZTFUkvpM?si=nIzmiuUcCXGkKZVs
 https://youtu.be/m8tCTCRj2wk?si=U5MbA0vIBb6h3Ofj
 https://youtu.be/6eKZjRHtZyQ?si=t6wY8oXSW55p8nHF
 https://youtu.be/GXeoHjFwLHU?si=P2U9QNRmkboXEOk7
 https://youtu.be/pPgg50YV7sc?si=1JZtKHN6GkZlbDUE
 https://youtu.be/uMgAw6F1mK4?si=0nxviE5eXE7tltQh
 https://youtu.be/lJNtNOC81oA?si=My9xCSWvEhqaOycj
 https://youtu.be/jmlUgw4I_dw?si=8xKIJEiYHeAEBZDo
 https://youtu.be/6J2AQlBbitA?si=D9QD6n7muum0Qrr-
 https://youtu.be/tdhedjKeudw?si=2i3YVdHJLmXECNHw
 https://youtu.be/GN3wp4afAL4?si=dr8l1kB4xvj0AfvV
 https://youtu.be/y6hcca6-Fqk?si=fAQRRmuM6UQ3aS1-
 https://youtu.be/Eovs870Gn-s?si=5r5DVZ6raKNDgmUP
 https://youtu.be/cQniKthKBys?si=yIVgqxS8KuXLD0Zs
 https://youtu.be/3_ed5-hU4T8?si=Uk8ewEvNoAoitSHL
 https://youtu.be/iipNFwL8kxA?si=aX5G_mpV6ZUBvy67
 https://youtu.be/TelDfpmoSOs?si=YD3ilChqoyd6wfNM
 https://youtu.be/uK-4HjDknjc?si=X464Sl0w_Xje7mQV
 https://youtu.be/zPK11PlFTWg?si=sIcPP4zHumoZoAx5
 https://youtu.be/DGJaULRb1Po?si=pxOvZQRyazHNlnAa
 https://youtu.be/uzbBFF1nk2A?si=s7CHAa7Ww24lkcPs
 https://youtu.be/Xkr4zOoYibU?si=SBU2e8VdGMDm-rYJ
 https://youtu.be/B_cEYcUAowo?si=WGl3P5YtUVtBTgq_
 https://youtu.be/jo0QKqom9Bk?si=GpkE9lnoM2mlRxkU
 https://youtu.be/3Id6qQ2cSeM?si=_0AMXJ7EQcV1H0fD
 https://youtu.be/EDC2H9c8fFk?si=7fYFWImuiMCGZ76J
 https://youtu.be/TbQS2Pnj6BM?si=-TRPMjNumLdUqqcx
 https://youtu.be/ATHBYwXzE2Y?si=kdZG3Vk__iEE3DY2
 https://youtu.be/i29vBBz8jq8?si=egrFCAb7dJdSI3kC
 https://youtu.be/lg4eXzOFbLk?si=lr46NJ1e2dm0_Kia
 https://youtu.be/-PJryxmpPFs?si=EuNYaxj27Sqtk9fF
 https://youtu.be/0lNKRo1cMwE?si=x4WwaBiClSnF5php
 https://youtu.be/x7JTcgwyT0w?si=g5WR9jBmgRriN0N7
 https://youtu.be/o4_VG3M_RNo?si=ppKywy_SXl78_v9t
 https://youtu.be/Y-bgbCBBdfQ?si=H_hXyxcaqjFlPjhh
 https://youtu.be/AMa2y3iox1E?si=trdPIMHrU5q7Rf6k
 https://youtu.be/KlTj4GoPF9w?si=cbFfg3H-z0MOGQls
 https://youtu.be/6eTJn4KXpA4?si=Iyl7f6y-ReRKu6Zt
 https://youtu.be/a5mAPNU-ujo?si=zwlwQyeDv3SxmGUE
 https://youtu.be/F2BwUN5NCXU?si=MTt9Wse49NNen9IH
 https://youtu.be/sAMrtNG9gcs?si=56s9ykSd9smOx55X
 https://youtu.be/_Ho9juvgLvQ?si=5yfO-iObniJUXRkc
 https://youtu.be/RyGOwqPj83I?si=6tXu3ODNXosNc8at
 https://youtu.be/pZs8JfwhveY?si=WHfA-k6hwiLIZtbO
 https://youtu.be/rYt4rFM7Flc?si=nbkavRj-lAL3uOhb
 https://youtu.be/iJhDp8PZEeg?si=RMek4IaAb7LgO4zj
 https://youtu.be/b-XNMopKlBY?si=RWUSYNyBIeSRrd3B
 https://youtu.be/_ei5t6ydABA?si=lO_EtXxbZzDin2gu
 https://youtu.be/jmlUgw4I_dw?si=lhAAFyARLLzqIguY
 https://youtu.be/eJ0a4psIzu0?si=gP6azlIhtp33HVdh
 https://youtu.be/FjZUqomYSZA?si=lFi3p0wYcDlzn8tW
 https://youtu.be/4izqWB2TNDI?si=cvOGK2Kf0U-OJs8R
 https://youtu.be/MPGRxPA9GUQ?si=-m5n5_jwr5Ng6T1l
 https://youtu.be/eJ0a4psIzu0?si=FnWtnrHR_lhcgXDj
 https://youtu.be/eEEgSa-HA04?si=jT_Dd5VX2wuGAd2I
 https://youtu.be/eJ0a4psIzu0?si=XGMQo0Jnnv0SjMRU
 https://youtu.be/j_A8UbZZOzA?si=J7NPI2-IBId77XOC
 https://youtu.be/XjJgq0V0LLc?si=I82xlr0dojMPwOsS
 https://youtu.be/_5Yh2G9cm8E?si=_PXXWFviGD806cHl
 https://youtu.be/gds10EcMOBM?si=f4Z8vY2r1UzsqkGN
 https://youtu.be/s5ofk8tptm8?si=YUFs9NfXip-sGNny
 https://youtu.be/xSC7agLebrA?si=1nhWS1d0COc7Trsu
 https://youtu.be/JmuBt0MZv3I?si=zs9pVrJ7PypzCF8B
 https://youtu.be/H2uODbw7Vjk?si=MLPOZEZ8-5tlqV56
 https://youtu.be/cg2ogGcC30w?si=K6suVYedgRowobr6
 https://youtu.be/l9ygqPoGQkY?si=yHIGbKIOIVhbDZGV
 https://youtu.be/O6YiD9_F68M?si=ZDvvq_-OfskkWi0M
 https://youtu.be/Hy1V-QZevbc?si=Kl73NFN9bKMX9oMM
 https://youtu.be/oBSee0OAOvs?si=OiMy654x-NxMn4xN
 https://youtu.be/qIm-hw0kRts?si=LVrKZmv81jG0IrHK
 https://youtu.be/4Wep7iKwn74?si=S0wBf7ImAPUSwXnF
 https://youtu.be/-msZIOlHiSw?si=paqRvGUi5YehyjG0
 https://youtu.be/OscJyLGoabU?si=9a7GapITv_wsOlE2
 https://youtu.be/hYKS9JX75dA?si=QDRTAHGNtD6qHtPq
 https://youtu.be/tCIXUrKGe_0?si=eF36QM9s5hSZGCDB
 https://youtu.be/eJ0a4psIzu0?si=wTk3Skt2xtdidivU
 https://youtu.be/Jvl8LtKc_2U?si=BlrjYxDgiC1TEo7n
 https://youtu.be/_ei5t6ydABA?si=XqRVdOiZsLxiU18Y
 https://youtu.be/jmlUgw4I_dw?si=8xKIJEiYHeAEBZDo
 https://youtu.be/6J2AQlBbitA?si=D9QD6n7muum0Qrr-
 https://youtu.be/tdhedjKeudw?si=2i3YVdHJLmXECNHw
 https://youtu.be/LCpgUdga6PM?si=n_389PoAYhFdSq2A
 https://youtu.be/eWrB1M7_rQw?si=z_crRQp20duQbx9G
 https://youtu.be/1loM0kbg1KA?si=i6sZWxvoC8HOCti7
 https://youtu.be/0gOq5ypSAwg?si=jmJB4W9ZqmZpQqmg
 https://youtu.be/v0HAS2Ua36E?si=mjkn5WxLZ0SFFnlN
 https://youtu.be/Slq06yg060o?si=TKNo8s7DBlSZkcek
 https://youtu.be/tHIsDMFkxVo?si=d97tOB82kM0abm1g
 https://youtu.be/iArLGMSN4H4?si=V4WQutFFdpHXzv0c
 https://youtu.be/ArNfB3hDuuY?si=eKJrmdBm7knnJzAI
 https://youtu.be/iFxDEgsKu-Y?si=GdllGFVvsqNsYh9y
 https://youtu.be/J_ZzRjPjt0Q?si=ElKzbh7pjD6r1UYr
 https://youtu.be/mEhvQpKNHEM?si=WpHqA0wNJVsm_dFV
 https://youtu.be/_ZM7NLu07i8?si=MVA2cEc7L1g8r9wR
 https://youtu.be/HXwKPewr2nc?si=Qq23fIFeSFZD6nIm
 https://youtu.be/v_RJdnOAsSI?si=YKf0dIiztfQIberk
 https://youtu.be/wh3-kxYfD4M?si=9Rx2lotqVh1d6KYj
 https://youtube.com/playlist?list=RDEMIa-elJCYvqADpdNQ-uOB1Q&playnext=1&si=iQh2lTX3ZgWUHW6D
 https://youtu.be/hSt_7vQAifY?si=kp68DO2uPLNffTzE
 https://youtu.be/fy_Lqk2bWrs?si=7xWJj73vF2JLFyWJ
 https://youtu.be/XypoA2JFSso?si=7J6iz-Qd5UbuoxeK
 https://youtu.be/35X8x1tY64Y?si=A4G5XrF0b_bIdJu-
 https://youtu.be/3Wzf-iaHRMI?si=CCQT_-S4B4XbqhMH
 https://youtu.be/1Ddd4SoCCcY?si=DruX7aJBL3Bo_i2J
 https://youtu.be/JmX42H02YYI?si=ED6OHR46W-iGSKFD
 https://youtu.be/QuAV8ynhko8?si=DjjQx8_WbNF0OxTJ
 https://youtu.be/YAMm40WSrik?si=Jx6N6c-Y9e7EczLf
 https://youtu.be/mzQV1NcpFMQ?si=bg5PVnRTrWyzrWxQ
 https://youtu.be/ePcPCBAkbfQ?si=LvZNFOpkL-K91ayq
 https://youtu.be/QQ8oddUTMas?si=sw3H9aKFa0o854rS
 https://youtu.be/nQN-X1YOd_0?si=DG0cAY0n2ZMRtWUg
 https://youtu.be/XWs-0OUiHTQ?si=eAnm2q6eTscYKfwm
 https://youtu.be/HlulH62qwOM?si=VJ1GdgDYqRLFmTJn
 https://youtu.be/8Cg4K-lcqkM?si=H8161o1u4Q7GxtuZ
 https://youtu.be/QsOvJ0jSZZo?si=6ejuOEGTR_I4HwHi
 https://youtu.be/5qC2q-nqQ64?si=oJZDMNnKBzVlKg4P
 https://youtu.be/gxs7Omyqr-Y?si=dJ3PzR2Bm3h8EFi3
 https://youtu.be/nMS6-5-cxbg?si=ibcx4sKN6zaziVPX
 https://youtu.be/ub0dCaOrcRE?si=-Y9ydFWqogXvyr-1
 https://youtu.be/jf_bsp39KQE?si=HPyuxpl0WPns5i8F
 https://youtu.be/oCgAszzPa3s?si=4V-oVxJoUR3vu0v2
 https://youtu.be/XeDIoU9jZeM?si=a4tFfGfkpjtnjXdi
 https://youtu.be/c9poUMUKSVg?si=4mWDiFPV3K_u2W1o
 https://youtu.be/b5asPJTGCW4?si=rAF2zZvjvVwQI7BO
 https://youtu.be/0Gay6-nvMpc?si=U4c_2ElGGCIzB77J
 https://youtu.be/KcZ6mT7c-qM?si=Uk6ZBnxrdk8IAqtS
 https://youtu.be/IbYm26L59Tc?si=BvMnck_EARDNaHRI
 https://youtu.be/nWtpvK-niVU?si=YQlsJTMXM9Ym3z_m
 https://youtu.be/fl6mBjLvSO0?si=QGoZWFOEhBK6KnKj
 https://youtu.be/qX2mBKh6s5w?si=PsdeO9uBMdeG-YFt
 https://youtu.be/474u0977qnA?si=tH-lRPakAVg-zoS5
 https://youtu.be/dvwnmXP9pec?si=3F9BCrG91zo7A2DD
 https://youtu.be/qbhw4iFQJ1E?si=v2Kj_sw4mKJbPsPq
 https://youtu.be/0IjzUU-iZrs?si=7N_ATTfPSjnR6N97
 https://youtu.be/yXrdF3Uz4ks?si=d_N-qijRV9ho-kkX
 https://youtu.be/sBZD7Dje-kg?si=scI7CwKL2LSKbeA-
 https://youtu.be/leKYF8LJx5E?si=vrglJAt68fWkjD_E
 https://youtu.be/0nDG7Wg1uM0?si=6_mAVycFAwwvgULG
 https://youtu.be/kuqFY4ymFCY?si=5hqCSa18iEBEEhZN
 https://youtu.be/qMc5v2CS4_c?si=-X9VB8qYN9jJeqKd
 https://youtu.be/YeSiahT__Us?si=bidWDSO8chyGRciC
 https://youtu.be/8P87a0q-Z3k?si=GXKl1E2790wq0oPV
 https://youtu.be/6egSMBVH0ok?si=esKOuqCnTuSlxaHT
 https://youtu.be/pGnQ2D_ksOs?si=yhIHigehwgA91A1h
 https://youtu.be/gKk041UPh7M?si=1H64rL0n8UnLEjgG
 https://youtu.be/AbDFC3n04Ik?si=E4d7E87gKk-xcz3J
 https://youtu.be/BYJbgqluYsY?si=Qw9PQc0Xj0rda9Vt
 https://youtu.be/tYqw7SMcmto?si=AOtapLg98B_K5zlO
 https://youtu.be/GcXtaQE9zGo?si=McTORk_3CHATpW_8
 https://youtu.be/aRyO_l-kRGo?si=a8_429NT4tg-NWLF
 https://youtu.be/m2YAGa1UZXk?si=6zpc25_7hfeny6Pd
 https://youtu.be/OfTFGIJx-gY?si=b7MSnQvEB8cOb2Aw
 https://youtu.be/2HG-xnRVVYA?si=qOkLn6uvev1_WHRD
 https://youtu.be/Hv7kaGkZ7zk?si=7LnftBTO6zeW8qX4
 https://youtu.be/0AdX33OECMI?si=gkJG7vq6iZoEgloS
 https://youtu.be/nq-UHrh1Onc?si=MONA2YhFRYM03ZAO
 https://youtu.be/kJ42Rpghk1o?si=InwU2kDn15zIz3x9
 https://youtu.be/8jVbo0FeNx0?si=mgnc-5jyZ2i6i8Q-
 https://youtu.be/m2YAGa1UZXk?si=3R1CtDhHegeqWaPl
 https://youtu.be/lUNUrcmq4K4?si=2aLxy_KGr5Kr7iv5
 https://youtu.be/g0lRojchAt8?si=WBmDZLR5GhQn4IjH
 https://youtu.be/r-qarpHuoas?si=60yG-Qf--96aXAcs
 https://youtu.be/rj8-eCv7DPg?si=-YTrwp-vsXcLk7zO
 https://youtu.be/pCEKsrXcw8I?si=yByQIQE3bT7TjWM-
 https://youtu.be/nRfMldcoJV8?si=mMhG8D7yWItOZSx1
 https://youtu.be/pDnvmF_3ytg?si=tFRCXEzC04dABNYH
 https://youtu.be/XLxMX0GVnK4?si=VHnhXCnzq6cRMinM
 https://youtu.be/7ef3tAQoodc?si=hz50RFwKnyOTc-5E
 https://youtu.be/9k8bfjeWeo4?si=SPaNuWy3FoPZO9Vl
 https://youtu.be/YJur3qYO5WM?si=18kjCTK4lRmng5mq
 https://youtu.be/BGReru2fkrM?si=FgFALT1EW2O0_jYt
 https://youtu.be/eNwklGDZkfw?si=PFtRQZkG64ULirzQ
 https://youtu.be/LiSiJyPJ1cU?si=hQAsfhvjbwtWg8Xk
 https://youtu.be/z1e1Q6kh6zw?si=bLbfj4hBW-agCyp9
 https://youtu.be/ykC32bDfU8g?si=rBi5c29l26gq1_CW
 https://youtu.be/xF27cnrGxmg?si=RtDXp0-D6jTKoz0N
 https://youtu.be/-aPRcoWBci4?si=uXx0MQ3JnRT3qm-o
 https://youtu.be/C4ho5SFh-TM?si=N40dCjnVADtJL10a
 https://youtu.be/kK_9ykC5xwA?si=5ru_PhpS34lDxPqg
 https://youtu.be/oAFHEQcPz8Q?si=SOSTknRGlpfrGCjT
 https://youtu.be/Sy_muYsysYM?si=fD1Eeixg5NcRn-lC
 https://youtu.be/fgyzTt2EPVc?si=Uq2Ph2oq50HClFVB
 https://youtu.be/vvRf_M5VDD8?si=Jsymcm7RRTOcqu7e
 https://youtu.be/Ce6I4nIE46E?si=sQ_7rTiove8yI4jc
 https://youtu.be/1YW2w6NuRdY?si=LPGaEt6MQg--1sRe
 https://youtu.be/7MpLBnX4cdY?si=mJ1XwK8dgDZ5SeYG
 https://youtu.be/lUNUrcmq4K4?si=II8dMnwxl1_NaXge
 https://youtu.be/XqcDUYXvIuM?si=fKq0afF68INCNLMB
 https://youtu.be/FJ5P8GMH5so?si=8sXVxs7MGTfw_mwy
 https://youtu.be/QppMgCezytY?si=OqkFQ7CJ-aPynSb6
 https://youtu.be/DX9rLAqmbgw?si=L61O49VqZnJTNwoS
 https://youtu.be/YfTHxNE-65k?si=ZiyT6tiKeGWKBkfs
 https://youtu.be/IftIRHSexCo?si=QGq_p931SgQd8AC2
 https://youtu.be/hNwOdL4NlB8?si=nlei8f3PzJ61Cz3Z
 https://youtu.be/cO9QlliNONA?si=7Oplauh5uvRnPNO5
 https://youtu.be/VemvFHnfoOo?si=3SuCBYS7gxdasuj9
 https://youtu.be/nq9TVmwWoOM?si=lOdC4J4F5xlB3Qu6
 https://youtu.be/nq9TVmwWoOM?si=-X6saEyYeVXDXmHb
 https://youtu.be/9Kxe8IHaU60?si=bxQkLOgNigoKqNjY
 https://youtu.be/ASGXFiRWnpA?si=t6kZTGG5KgP2sTIq
 https://youtu.be/E0xruCVUcQI?si=92qGCWHRvsD-Dh1M
 https://youtu.be/jRAYOnNKWnY?si=MQlJ7HBdJRS2ZWLg
 https://youtu.be/XcIZa6bY2bM?si=ZIEE7691nLBSHsko
 https://youtu.be/NLXe7daV-fg?si=Fyh1ui1CB1jEURk1
 https://youtu.be/S_wkOu4sd9c?si=AlOIpnK-_HpzukPd
 https://youtu.be/_me3QnaYdAI?si=ndawrng6KSmFDSaO
 https://youtu.be/7bPriAktbn0?si=rDSw1zxvHcQyLI7T
 https://youtu.be/TCeDNNR3VLo?si=17prEnsV9TnsKGSv
 https://youtu.be/RyFZYhPxW70?si=ZgEFwR0tZCRnT52N
 https://youtu.be/GfPJMv9nOvQ?si=sWhLeEi57-_xZjek
 https://youtu.be/V-C4IBhgdIA?si=DAwgIhsFNuW8sFZb
 https://youtu.be/HM8XezDm89o?si=baM_E4XJu4jUlY9A
 https://youtu.be/hdA0scW8ijw?si=99FFKTJ3-CAwoEst
 https://youtu.be/I3-Ifzb6qyU?si=KWp3QV8PPOxm424d
 https://youtu.be/nomaHvmD9RA?si=qQ_Q5A9vJirce0zW
 https://youtu.be/StDB8yQuuCY?si=lbJAspyapxPb0_jk
 https://youtu.be/NZdFOflW4r4?si=zg_8igCgW4eVaJMF
 https://youtu.be/M9rpgwahwbg?si=L66LZwxNuRT9r9P0
 https://youtu.be/c5g8YWOHFkk?si=iOpygNiekXvmI5Ob
 https://youtu.be/8j8dUs0LW8g?si=WNvJ5Sl50IZJHoez
 https://youtu.be/s7IPSwoaXKo?si=jQdLV15POszvGkKK
 https://youtu.be/LDpAK5sWeZc?si=-3Bt3DqKHW5A5q2I
 https://youtu.be/AzILL8yIbcQ?si=QgU1GKsv3z2VSuXX
 https://youtu.be/owLarXhTxUI?si=SsRD2UqrWCxPIIHr
 https://youtu.be/LGxMarEKy2g?si=yvb6vR0RMbH8CviT
 https://youtu.be/pPgg50YV7sc?si=fN0xlasmreHs5oVc
 https://youtu.be/c_wXFfLH_VM?si=Tln3GXhSz6hJ64R0
 https://youtu.be/Ed3zXknEVmM?si=Rofmp1r18DyHkJzP
 https://youtu.be/lwJa5TOccHw?si=5OAO7oj_0wnPjxW5
 https://youtu.be/eq9yRoopW1o?si=v51mfYHQ4CiKiVnm
 https://youtu.be/onVTGDDfqYE?si=x_DQgmF5ac0LeXhm
 https://youtu.be/EXuUXJRHPZQ?si=u_Jmmws7whNPJ1Ix
 https://youtu.be/wlgsVLo343c?si=ypL_lO6qnyPEieJA
 https://youtu.be/tzV9qYgmpyc?si=B88Ei_mfTH1Q9xef
 https://youtu.be/Q-OVnpikg1I?si=fofsC2vl3t6QfKus
 https://youtu.be/41RthBI_VsE?si=Iox4Vvdwkr9xi0dX
 https://youtu.be/H8aM2zviCNY?si=QJ1c-6JJdvE6_HbC
 https://youtu.be/m_Dply9OidY?si=vr4Isye5W-LwKUXZ
 https://youtu.be/Nk4EeUMG3qA?si=l4k-N6cJ-IJWWbXQ
 https://www.facebook.com/share/r/WyBVk4fX7kKww6pw/?mibextid=D5vuiz
 https://youtu.be/Py-g87zk2Z4?si=6i94ElnCreB30wEe
 https://youtu.be/aDzmZ2kjmhk?si=ZFmfX_-jobo_EogP
 https://youtu.be/QCeQ07TXTsI?si=XDqAY0t8knR_yEV4
 https://youtu.be/ArNfB3hDuuY?si=MOcTv5AodhxDgzHg
 https://youtu.be/AyXfIKwrSAM?si=eqhZ29vRDR29mh6z
 https://youtu.be/sAMrtNG9gcs?si=56s9ykSd9smOx55X
 https://youtu.be/jf_bsp39KQE?si=HPyuxpl0WPns5i8F
 https://youtu.be/oCgAszzPa3s?si=4V-oVxJoUR3vu0v2
 https://youtu.be/XeDIoU9jZeM?si=a4tFfGfkpjtnjXdi
 https://youtu.be/c9poUMUKSVg?si=4mWDiFPV3K_u2W1o
 https://youtu.be/0Gay6-nvMpc?si=U4c_2ElGGCIzB77J
 https://youtu.be/tpsD4HmpuR8?si=Wezz0UChMlzV3yfK
 https://youtu.be/2Z5uJ2zIBgo?si=MB_px0zYX8MXR2IF
 https://youtu.be/N-8QcmW9Rwc?si=dg1LoYMDpLW1Iyfe
 https://youtu.be/_r5ilk65BmI?si=F-zd_O9RQMCkS3ok
*/