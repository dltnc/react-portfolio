import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { Table, TableCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection first className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven’t
                    looked back. I’ve also created{' '}
                    <Link href="https://www.figma.com/@hamish">a few plugins</Link> that
                    you can install.
                  </li>
                  <li>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven’t found a non-Adobe product that’s as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </li>
                  <li>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it’s
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </li>
                  <li>
                    Firefox is my main browser for both development and general use.
                  </li>
                  <li>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </li>
                  <li>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </li>
                  <li>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </li>
                  <li>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </li>
                  <li>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. Check out the{' '}
                    <Link href="https://storybook.hamishw.com">
                      storybook for this website
                    </Link>
                    .
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableRow>
                  <TableCell>
                    <strong>CPU</strong>
                  </TableCell>
                  <TableCell>AMD Ryzen 5800x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>GPU</strong>
                  </TableCell>
                  <TableCell>MSI Gaming X Trio RTX 3080</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Memory</strong>
                  </TableCell>
                  <TableCell>GSkill 32GB DDR4 3600mhz CAS 18</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Motherboard</strong>
                  </TableCell>
                  <TableCell>MSI B550 Tomahawk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Monitor</strong>
                  </TableCell>
                  <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Keyboard</strong>
                  </TableCell>
                  <TableCell>Logitech MX Keys</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Mouse</strong>
                  </TableCell>
                  <TableCell>Logitech G403</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Laptop</strong>
                  </TableCell>
                  <TableCell>Macbook Pro 14″ (2022 M1 Max)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Headphones</strong>
                  </TableCell>
                  <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Microphone</strong>
                  </TableCell>
                  <TableCell>Blue Yeti</TableCell>
                </TableRow>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
