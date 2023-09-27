import Head from 'next/head';

import { Box, Typography, Container, Button } from '@mui/material';

import NewBetterSlider from '@/components/Slider/NewBetterSlider'
import PageLayout from '@/components/layout/PageLayout';
import NavBar from '@/components/layout/NavBar/NavBar';
import CardHolder from '@/components/CardHolder';
import BeardsComponent from '@/components/SectionComponent/BeardsComponent';
import WorkingHoursComponent from '@/components/WorkingHoursComponent/WorkingHoursComponent';
import FooterComponent from '@/components/layout/Footer/FooterComponent';


export default function Home() {
    return (

        <>
            <Head>
                <title>Home</title>
            </Head>
            <NavBar></NavBar>

            {/* <Box sx={{
        margin: '0 100px',
        overflow:'hidden'
      }}> */}
            <NewBetterSlider />
            {/* </Box> */}


            {/* <PageLayout> */}
            <hr />

            <CardHolder />


            <BeardsComponent />

            <WorkingHoursComponent />


            {/* </PageLayout > */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'yellow',

                }
                }
            >
                <Box sx={{ display: 'flex', }}>
                    {/* Можем да сложим някакви продукти */}
                    <Box><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda totam iste consequatur reprehenderit deleniti possimus quos, necessitatibus quasi provident, tempora laborum itaque voluptatem unde vel, fugit ea explicabo dignissimos neque. Minus ipsa reiciendis sint culpa, in voluptatum blanditiis ea dolore! Iste labore mollitia rem eaque ratione ipsa deserunt sapiente quisquam dolores suscipit? Laudantium accusantium officia, commodi odio, natus architecto maiores impedit at aliquam quo corrupti dolore. Adipisci impedit amet dolores. Dolorum vitae itaque quod, rerum, tempora doloremque aspernatur architecto voluptatem animi repudiandae obcaecati maxime ducimus. Deleniti, reiciendis quaerat soluta reprehenderit ab, porro inventore incidunt eaque numquam modi cupiditate? Obcaecati praesentium voluptates eos provident rerum, aliquam minus consequatur quia ratione quae dolorum pariatur voluptas similique sapiente blanditiis temporibus architecto. Quaerat ipsum dolore deserunt corporis nemo voluptate dolorum cupiditate. Blanditiis asperiores quod rem ex corrupti, cumque repudiandae doloribus architecto corporis minus laborum impedit, dolores eum quae incidunt dolor recusandae quidem accusantium, beatae velit facere enim ad est qui? Consequatur reprehenderit qui doloremque eos consectetur, pariatur animi doloribus nesciunt veniam molestiae. Vitae quaerat ipsa provident, perferendis laborum commodi autem vero id nemo recusandae aut ad accusamus, sapiente tempore voluptas nihil voluptatibus iure suscipit. Porro quod quasi dolorem aperiam eum nemo nisi ullam odio minus voluptatibus odit facilis non possimus qui, neque recusandae provident hic placeat architecto? Quos, aut fuga facilis amet magni dolorem esse labore iste? Temporibus aspernatur ea sapiente non, ex reiciendis minus ratione? Delectus ipsum tenetur deserunt atque amet enim? Doloribus, voluptate pariatur dolores, animi tempora nihil repudiandae tenetur molestias saepe reprehenderit porro rerum iure ullam tempore dolorum maiores labore sunt! Rerum enim distinctio delectus non ut itaque? Numquam dolore molestiae, reprehenderit, voluptatibus blanditiis dolorum totam minus debitis labore iste sapiente eaque deserunt minima architecto culpa atque velit cum corrupti alias facere perferendis. Quasi ipsum ut expedita, hic fugit unde, molestias assumenda ipsa distinctio omnis ipsam illum cum. Soluta vero praesentium quos libero sit animi porro, deleniti amet, molestiae cum consequatur maiores maxime ipsam dolore minus quidem facere atque ullam iusto obcaecati. Nobis, saepe! Dolorem ipsa quam iusto veritatis sequi quibusdam beatae pariatur accusantium, sunt ipsam qui nemo illo placeat explicabo, iure sit magni, fugit officiis maxime illum? Perferendis, neque, magni nesciunt, omnis rem assumenda aspernatur tenetur consectetur voluptatum velit autem. Reiciendis delectus doloribus dicta et veritatis perspiciatis accusantium eius dolore, iure totam doloremque optio sed recusandae ad expedita quod laborum. Rerum asperiores obcaecati non dolore quaerat, aperiam magnam, quam quia ad fugiat odio officia sint quibusdam. Repellendus, in deserunt! Ipsum quas at asperiores fuga maxime quaerat ad saepe soluta aperiam vero quibusdam hic possimus aut provident optio distinctio, laborum sint officiis deleniti consequuntur labore mollitia non! Enim aut eligendi laudantium incidunt temporibus reprehenderit cum voluptatum dolor nobis voluptates sunt vero illum minus provident doloribus, magni libero eius est corrupti molestiae doloremque animi impedit! Quidem quos autem amet earum, dolores eos neque quis sequi dolor voluptatum, qui ullam, voluptatem eligendi? Suscipit laborum sunt distinctio molestiae, error veritatis libero excepturi exercitationem facere voluptatum odit, nam eos dolorum quia aperiam sit repudiandae perspiciatis. Corrupti veritatis non harum, atque doloribus sequi, obcaecati sapiente, reiciendis deserunt assumenda voluptatem? Eligendi nemo fuga placeat porro, possimus neque praesentium architecto corrupti corporis aperiam rerum itaque dolor cumque maxime voluptatem quasi velit nesciunt consequuntur suscipit voluptates! Repellat, nesciunt? Maiores necessitatibus aliquid natus dolorum eos repellat temporibus vel accusamus? Iste, illum illo accusamus libero velit porro rem delectus nobis perspiciatis architecto minima cum consequatur quae dolor aperiam vitae et inventore adipisci nam. Molestiae dolorum repellendus ut totam autem placeat fugiat cupiditate voluptatum expedita minima, explicabo nulla magni fugit magnam temporibus hic obcaecati ullam accusamus iure atque maiores architecto. Explicabo, rerum praesentium est ullam cupiditate mollitia eaque ratione? Consectetur numquam voluptatem natus est quisquam ducimus officiis culpa ex laboriosam at dignissimos dolores rerum reiciendis harum vel excepturi aperiam cupiditate ab iusto tempore pariatur necessitatibus alias, in animi. Cumque magni iusto hic perferendis at! Molestias illo omnis itaque? Cupiditate rem velit alias voluptas minus harum est at fuga illum natus aliquam odio eum voluptatum omnis debitis soluta iste, modi dolorem amet quam adipisci enim? Animi vel facere perferendis officia et illo dicta nihil, explicabo consequatur, iusto, cupiditate quaerat qui corrupti nemo hic quibusdam sapiente ex impedit voluptates quidem quisquam odio reiciendis? Cum neque architecto hic beatae suscipit eius quae at. Voluptate quisquam laboriosam magnam error pariatur beatae quo velit sed eos, quibusdam fuga labore laborum eligendi consectetur fugiat ex aliquid. Numquam earum quidem quo culpa deserunt facere corrupti aliquam veniam omnis non provident error dicta reprehenderit sapiente totam eos repudiandae iste, ad vitae nesciunt enim quasi aut. Temporibus nulla ipsa natus necessitatibus illum iure id dolorem cupiditate. Quas vitae dolore doloremque atque delectus consectetur numquam, optio, totam maiores aut aspernatur dolorem illum unde accusantium beatae eos similique exercitationem ipsa commodi odio dolores, sunt velit odit at. Aliquid quam recusandae aspernatur doloremque. Minima, nostrum illum perferendis iure officia temporibus fuga, totam voluptas ducimus ut, praesentium corrupti explicabo itaque voluptatum aliquid esse sint? Mollitia, harum. Iure aspernatur unde nihil error doloribus sed eos. Corporis recusandae culpa quasi consequatur voluptatibus voluptate sequi iste velit! Quas ducimus architecto consectetur commodi ipsa quam eligendi reprehenderit. Molestiae blanditiis quaerat accusantium voluptatem nisi deserunt ut inventore. Fugiat praesentium quos, aliquam aperiam, et a est optio dolorem rerum atque illo ab quibusdam corrupti consequuntur soluta exercitationem nemo error delectus provident facilis. Similique sunt ea modi velit quod, ipsam vitae iure a magni quaerat? Dolorum ducimus maxime ullam beatae, distinctio iusto, obcaecati, nostrum assumenda suscipit dolore iure? Est quos repellat, maiores fugiat porro, eius ad, quasi provident nihil reprehenderit assumenda. Minus doloribus exercitationem ipsa omnis mollitia quam voluptatem deleniti expedita eveniet autem sequi aliquid deserunt natus, dolores pariatur totam reiciendis officia blanditiis! Nulla, odit deserunt accusantium deleniti corporis sed placeat tempora molestiae doloremque eveniet ad, voluptatibus numquam inventore incidunt natus mollitia eaque, rerum eum saepe quod. Dolore quisquam aperiam quidem pariatur sint non, error dignissimos, eligendi quod officia eius enim, quasi animi commodi sequi unde eaque ducimus. Soluta maiores pariatur, doloribus doloremque, perspiciatis commodi magnam beatae accusamus ex modi eligendi?</p></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <Box sx={{
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    position: 'absolute',
                    background: 'linear-gradient(hsl(0 0% 0% /1),hsl(0 0% 0% /0))',
                }}></Box>
            </Box >
            <BeardsComponent />
            <FooterComponent />
        </>
    )
}