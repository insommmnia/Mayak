import { React, useRef , useEffect} from "react";
import './about.css';
function About() {
    const aboutBlockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutBlockRef.current) {
        const element = aboutBlockRef.current;
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.6) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className="about_sec">
            <div className="about_container">
                <div className='about_block' id='about_block' ref={aboutBlockRef}>
                    <div className='about_title'>
                        <h1>
                            Знакомься !
                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <rect y="8.86951" width="35px" height="35px" transform="rotate(-9.56101 0 8.86951)" fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#image0_17_222" transform="scale(0.00195312)"/>
                                    </pattern>
                                <image id="image0_17_222" width="512" height="512" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAqNQTFRFAAAA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dA78dAMt4mXwAAAOF0Uk5TADd9rsM2UNT/0k8Oq6oNEM3MDwK8u3FuDOrsYQTv8AU9PIaF0M8Z/hpiPofxQ0KQjtvcKyd6dyYkfHjRKIoD4+RJRaekFPf2E3ZyAdpGrCH8IpMR8/J5cwfl4QZpY9/dXNfeC+jmCvSgmzH9M8C+W1jnlI/K+CnGcC4IiUEXgX4g6+0JqKZ1U1E09R8eEtPHs56cjYCIgpWasjWiHUQWub/pkS/Fy5lNXjJ7ZmDgX9hvrdUVpUcwxCrOVe4j+fpaV4ujoYxZViVtbGoc++LZ1hi9P7ifwrB/sRtSuizInWd0CMt3eQAAD6JJREFUeJzt3Yl/FsUdx/F4MgpU4aknSCKKgIqKYsArImoiRiWUw1itVhSxBrVUQ/EsCh5VUatJrwi1sSIaURQ8q/Wo9a6trb0P+6e0W+AFT/Ice8zOd3f28/4L5je/2U2++8zONjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQGp22XW33Xffbdc91OOAxJ7DzDZ77a0eC5wbPsLsZORX1OOBW/vsa8qMGq0eEVwqfdUMsl9JPSY4tP/g/htzgHpMcOfAg4YugIP5N6A4xgztvzFj1KOCMyMqLYCR6lHBlbGHVFoA4xrV44IjTZX6b8yh6nHBkfGVF8Bh6nHBkcMrL4AJ6nHBjSMmVl4AEyepRwYnJlfuP0GwKCqGwABBsBAqh8AAQbAQqoTAAEGwCKqEwABBsAiqhMAAQbAAqoXAAEGwAKqGwABB0H9VQ2CAIOi96iEwQBD03pG1+m9Mk3p8SNlRtRfAePX4kLIaITBAEPRcrRAYIAh6rmYIDBAE/VYzBAYIgl6rHQIDBEGv1QmBgSb1GJGiOiEwQBD0WZ0QGCAIeqxeCAwQBD1WNwQGCIL+qhsCAwRBb9UPgQGCoLdChMBAk3qcSEmIEBggCPoqRAgMEAQ9FSYEBgiCngoVAgMEQT+FCoEBgqCXwoXAAEHQSyFDYKBJPVakIGQIDBAEfRQyBAYIgh4KGwIDBEEPhQ6BAYKgf0KHwABB0DvhQ2DgaIKgbyKEwECTerywLEIIDBAEfRMhBAYIgp6JEgIDBEHPRAqBAYKgXyKFwABB0CvRQmCAIOiViCEw0KQeMyyKGAIDBEGfRAyBAYKgR6KGwABB0CORQ2CAIOiPyCEwQBD0RuO4OAuAraHemBKn/8Ycox43LDk23gI4Tj1uWDI13gI4Xj1u2HFCvP4bM009clhxYtwF0KweOayI8Rhwq1HqkcOG6XH7b8wM9dhhwUnxF8DJ6rHDglPiL4B91WNHcrEzQOBU9eiR2GlJFgCbAnKv5fQkC2Bmi3r8SOiMJP03ZpZ6/EjozGQL4Cz1+JHM2a3JFkDbOeoKkMjsZP035lx1BUii/bykC2Bqu7oGJHB+0v4bM0VdAxLYLfkCuEBdA+Kb05F8AXTMVVeB2L6WvP/sDMuxefNtLIAFo9V1IKaFNvpvzIXqOhBP50V2FsDXL1ZXglgusdN/Y76hrgRxNF5qawFcNlZdC2KI9UZoZd9U14LoWhI/Bd7h8pK6GkQ2xl7/uQXk0MWLbC6ASwkCeXOAzf4bc4m6HkRzxZV2F8Diq9QVIZJd7fbfmIXqihDFpCW2F8D8I9Q1IYKrbfffmG+pa0J413TZXwBdS9VVIbRr7fffmOvUVSGs69PovzHfVteFcIZb+hl4sGXsDMmH76TTf2NuUFeGMJZa2AlaWcc16tpQ39h90+q/MTfysnD2xT4TLIzZ6upQz7SEb4PW1r1cXR9qK+2eZv+N+S5bQ7LtwnT7b8wKdYWo5YRU/wAEum9S14jqOhMcCRfWsJvVVaKq49LvvzG3qKtENbNS+BFwqK5b1XWistsWu+i/MVeyNySTSvu56b8x1/FAMItud9V/Y76nrhVDufkHYKsODg7KnJV3uOu/MXdybkzGrErxN8BKDr9CXTF21r7abf+NuUtdMnaW6m/Ald2trhk73OPwH8Dtuu5VV43tvn+f+/4b07aLum5sdb/lF0HDWvaAunIE1gzT9N+YB+epa8f/AmDKe4BqeYgwKNdi4Tzo+B7m/DCx9h8o+2/MI3xOQCvRR+FsOFY9A8U2Xt1/Yx5Vz0GR9ai7H+C3YRnBA+BK+MS0SLO689v1qmeimH6o7vsObBR2r/0Gddd39iPSoGMtP1b3vNzVPBFyqvMCdccH+8kq9ZwUyTzh8/9qHuIrw87cL/v9r5YH+XXYkT2WqXtd2bKfqmemGO6R7P8Jo5WTBNPXfuJEdZ+r6+IMobTd3Kducm2r2SKSqsdGqTtcz+Fz1HPks/PvVPe3vjvWqmfJW6Xm1M4AtWliL2+Pp2Ldz9StDetxTpBIwayfq/sa3jJeH7ets1fw9ld8E/s71TPmlxMmqFsa1bAn1HPmkdKF3ep+Rte6glNlLZmRyieA0veLU9Uz54Wxzakf/5qW1p5G9ezl31LHZ7/Y9STfGElmdH8unv1U17WeL00l8NTp6gYmt2wDG0Zjejqn//wN9jh/B+I4Yn3O7/47dPXxbDiqA3edr26bTfOfYZ9AFI0Djg7+dueOZj40EVbLsxvV7UrDpc/xM3EYjRueV7cqLYsGeDBUz8UbpqrblKaNm/hDUMu85pQ+/J0dM2fvo57lzJrTO07dHhfmr5+mnuksKp2/mze5v56OF9bydLDcPgMvqrvi1tTmzeo5z46WM87M4YaPpFq3vEQsDCzv8TL1h3FR/8vq2VdbuekVdRe0Xuwp8H+Er56Yu62eaXht4XJ1JwRaDu29XD3z2bFo/VMXqzvi0qTJIwqR+KMYN2LyJHVfnGhZ2jMqw2/4S13Wv9bzG8G61/t+qZ7lbFvy8MBj6i6lhEs/LB9vBFz60Xh1I+DSj8ePGwGXfhI5vxFw6duQ1xsBl749ubsRcOnbl58bAZd+WnJwI+DST1uWbwRc+m5k8kbApe9Wtm4EXPoKGbkRcOkrqW8EayaPPEQ9B0V3yMjJa0Ttn7G6gHt5s6j7zDcU/V/xprpwbNd9gPv+96uLxs6Oc93/c9UVo9wmt/2fntvDG33V7fZY0tXqejHYFpf9v+1X6nIx2Jsu3zZ9S10thnrb4QJ4VF0shnrH4QJ4V10shvq1wwWQ8a83FtPVDhfAe+piMZTLPwG/UReLod53uADWEQMzx2kMbLhLXS4G63PZ/4YP2tT1olzbDKcLoGGTumCU+9Bt/3kWlDG3uO5/Q8NH7AfKjNaP3fe/oWHuFpZAJnSfNUfR/wY2hWaBcFPo/7EtXEm9LXybzbwYIrDk4YFP1J3fgRuBWxm59MtxI3AjW5d+OW4EacvkpV+OG0Fasnzpl+NGYF8OLv1y3Ajsyc+lX44bgQ25u/TLcXhEEhk5BCIhbgTx5PzSL8eNIBo/Lv1y3AjC8urSL8eNoB4fL/1y3Aiq8/jSL8dHo4YqzEejtmk5tLdgXwuu5bKCfTZum2nNo9QznwVPzp6u7oTO/ZteKfY/BC/2FLj7W03rWaTugsrM/pvUs58JpfPPKuCZU219a0vqmc+O0QPD1A1x67zms9VznjHtUy7oUHfFlU9HHNOunu8sWtlbiMeEC/pXqmc6s0Zf+Ft1e9K2cf/h6lnOtMYNn6lblKZFmzrVM5x5pdd/p25TWo4fGKue3VwovT5V3ao0bBxoUc9sbjQOXKRul20HNXPzj+KqhQvULbPp6OZV6hnNnbP7vXku0NX3e/Vs5tLL16k7Z8fnT6hnMree8uCxwOIN6lnMsyt6P1U3MJlP+3nuk8zLN6p7mMRD/N6bWGlgibqNcbU1k/xtmJvTfwZfmaaeOV+UVuRww0jbh/zka8/yfdX9jGov/vpb1diTq8dCE/uLuM07XbcuVnc1vIv+oJ4tH23+o7qvYX3Ok99UtDfn4s9ARw+7fdMy5Q51d+s76Fb1LPnsk8w/F5ywUj1Hfrv5C3WHa9tylXqGvHd3l7rJ1XXsr56dIrj3PnWfq1myt3puiuGJ09WdrmzxUvXMFMUDD6p7XckpuTzNM5/2+ZO620NdO1o9K0XSOULd78H+zLZfp1rWqzte7gve+XGsPVNfrnT56XZsc7u66zv0queimJrVfd+O/oucrO78Vs3qeSiuv6h7HzhJPQtFdpi6+8a8p56DYrtF3f8b1DNQcO2PaPu/Xj0BhddygbL/f+X5j9wq4e8C196srh4NDfNkvw2ewu8/mfA30f6AxZ5/3CU/npa8P9y2h7pubPd3wT7Brj3VVWOH2e4XAPs/M8X5bvF31RWjzCrHnx+awP7/jLn/IJf9P3iOul4MNsXhm6MdvP+XQT3uFsAz6lpRQekfrvr/OYd/ZdI6R2eIXMn5Dxk1xcnzoA7Of8msd1wsgMPUVaKqzsPT7/9rnP+VYa+2pd3/1n+qa0QtK9JeAB+qK0RNpZT3B13L+a8ZNz3VPwL3faCuD/Wk+svwuerqUNfYJ9Pr/794BJgDN6X2lZlPX1bXhjD601oAj6orQyjDU/rs6DJ2gefEW+ksgPfVdSGsx9Po/+fqqhDaEynsDurgGzA58m/7C4D3gPPktqNt938Bu0By5RnbC4CDgPLlimV2+7+Y9wBy5iO7C+BLdT2IqPEym/1fxDag3HnO5gJ4S10NImv5zF7/X+RDcDn0rL0FcL26FsTQuMhW/4/nLLBc+tLWApisrgSxdM600/+NjepKEI+l7YEcBpNXw638IrCAfSC5dayNBcBx4Pm10sL+0A5Og8mxF5IvgBHqGpDArOQLgOOA8qw98fPg53kZMNf+k3QBrFBXgETOaU3W/7Y16gqQzJZkC6BPPX4k9FKyBTBFPX4kVEr0NYmZvA6ce4k+LMeJYPn3apIFME09eiQ3IX7/n1SPHRacGH8BzFaPHRbMjb8A3lCPHTa8Frf/N6pHDisWxl0A/AXww/K4C2C6euSw47x4/Z+qHjcsuSHeAmAvmC+OibcA2Arii8Zxcfo/jtcBvDEizgIYqR41rJkcZwGMUY8a1hwxMXr/J05Sjxr2xPiW0AT1mGHRUdEXwHj1mGHRkdEXQJN6zLBo7CFR+380IdArkYMgIdAvkYMgIdAvUYMgIdA3EYMgIdA3EYMgIdA3EYNgk3q8sCxaECQE+idSECQE+idSECQE+idKECQE+ihCECQE+ihCECQE+ihCEGxSjxUpCB8E2Q7qp9BBkBDop9BBkBDop7BBkBDoq5BBkBDoq5BBkBDoq5BBsEk9TqQkXBAkBPorVBAkBPorVBAkBPorTBAkBPosRBAkBPosRBAkBPosRBBsUo8RKaofBAmBfqsbBAmBfqsbBAmBfqsXBAmBvqsTBAmBvqsTBAmBvqsTBJvU40PKagdBQqD/agZBQqD/agZBQqD/agVBQmAR1AiChMAiGF99AfCh0CJoqr4ADlWPDQ5UD4KEwGKoGgQJgcVQNQgSAouhWhAkBBZFlSBICCyKKkGQEFgUVYIgIbAoKgdBQmBxVAyChMDiGFNpARACi2NN99D+v3m2elRw58yhC+As9Zjg0Nwht4DuGeoxwaUDBi+Aj9UjglvHlff/FvV44Nqm1h3tb/tQPRq498GWN7f9///uG+qxQGLz2+/09Z32/mb1OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC5/wIAfEEH7bVtMQAAAABJRU5ErkJggg=="/>
                                </defs>
                            </svg>
                        </h1>
                    </div>
                    <div className='about_descr'>
                        <h3>Наш бот - это ключ к увлекательному миру знакомств и новых связей! </h3>
                        <h3>Присоединяйся к нам и стань частью нашей дружной семьи из уже <span className='colRed'>123456</span> пользователей на <span className='colRed'>12343</span> серверах!</h3>
                    </div>
                    <div className='about_servers_block'>
                        <div className="about_server_card"></div>
                        <div className="about_server_card"></div>
                        <div className="about_server_card"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;