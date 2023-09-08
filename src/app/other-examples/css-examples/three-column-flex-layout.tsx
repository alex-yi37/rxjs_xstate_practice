import styles from "./three-column-flex-layout.module.css";

// code from here: https://stackoverflow.com/questions/48943233/how-can-you-set-the-height-of-an-outer-div-to-always-be-equal-to-a-particular-in
export function ThreeColumnFlex() {
  return (
    <div>
      {/* first solution using positioned layout and divs wrapping around the overflow content */}
      <h2>First</h2>
      <div className={styles["container"]}>
        <div className={styles["inner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim ipsum orci ut volutpat ligula finibus a. Maecenas ut
          pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu
        </div>
        <div className={styles["inner-alt-1"]}>
          <div>
            ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
            volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
            tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
            ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu
            odio vestibulum, eget bibendum risus commodo. Nullam tristique nibh
            sed iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus
            a. Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum,
            eget bibendum risus commodo. Nullam tristique nibh sed iaculis
            vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
            ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
            bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
            Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut
            pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
            risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus
            ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante.
            Nunc volutpat est eu odio vestibulum, eget bibendum risus commodo.
            Nullam tristique nibh sed iaculis vulputate. Vivamus ac tincidu
          </div>
        </div>
        <div className={styles["inner-alt-1"]}>
          <div>
            eget bibendum risus commodo. Nullam tristique nibh sed iaculis
            vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
            ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
            bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
            Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut
            pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
            risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus
            ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante.
            Nunc volutpat est eu odio vestibulum, eget bibendum risus commodo.
            Nullam tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut
            volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat
            est eu odio vestibulum, eget bibendum risus commodo. Nullam
            tristique nibh sed iaculis vulputate. Vivamus ac tincidu
          </div>
        </div>
      </div>
      <br />
      {/* second solution markup is here */}
      <h2>Second</h2>
      <div className={styles["container"]}>
        <div className={styles["inner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim ipsum orci ut volutpat ligula finibus a. Maecenas ut
          pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu
        </div>
        <div className={styles["inner-alt-2"]}>
          <div>
            ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
            volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
            tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
            ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu
            odio vestibulum, eget bibendum risus commodo. Nullam tristique nibh
            sed iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus
            a. Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum,
            eget bibendum risus commodo. Nullam tristique nibh sed iaculis
            vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
            ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
            bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
            Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut
            pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
            risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus
            ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante.
            Nunc volutpat est eu odio vestibulum, eget bibendum risus commodo.
            Nullam tristique nibh sed iaculis vulputate. Vivamus ac tincidu
          </div>
        </div>
        <div className={styles["inner-alt-2"]}>
          <div>
            eget bibendum risus commodo. Nullam tristique nibh sed iaculis
            vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
            ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
            bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
            Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut
            pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
            risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus
            ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante.
            Nunc volutpat est eu odio vestibulum, eget bibendum risus commodo.
            Nullam tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut
            volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat
            est eu odio vestibulum, eget bibendum risus commodo. Nullam
            tristique nibh sed iaculis vulputate. Vivamus ac tincidu
          </div>
        </div>
      </div>
      <br />
      {/* third solution markup is here */}
      <h2>Third</h2>
      <div className={styles["container-3"]}>
        <div className={styles["inner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim ipsum orci ut volutpat ligula finibus a. Maecenas ut
          pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu
        </div>
        <div className={styles["inner-alt-3"]}>
          ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat
          est eu odio vestibulum, eget bibendum risus commodo. Nullam tristique
          nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat ligula
          finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus a.
          Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
          bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
          Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra
          ante. Nunc volutpat est eu odio vestibulum, eget bibendum risus
          commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
          volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
          tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
          ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu
        </div>
        <div className={styles["inner-alt-3"]}>
          eget bibendum risus commodo. Nullam tristique nibh sed iaculis
          vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
          ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
          volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
          tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
          ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus a.
          Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
          bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
          Vivamus ac tincidu
        </div>
      </div>
      <br />
      {/* fourth solution markup is here */}
      <h2>Fourth</h2>
      <div className={styles["container-4"]}>
        <div className={styles["inner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim ipsum orci ut volutpat ligula finibus a. Maecenas ut
          pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu
        </div>
        <div className={styles["inner-alt-4"]}>
          ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat
          est eu odio vestibulum, eget bibendum risus commodo. Nullam tristique
          nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat ligula
          finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus a.
          Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
          bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
          Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas ut pharetra
          ante. Nunc volutpat est eu odio vestibulum, eget bibendum risus
          commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
          volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
          tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
          ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu
        </div>
        <div className={styles["inner-alt-4"]}>
          eget bibendum risus commodo. Nullam tristique nibh sed iaculis
          vulputate. Vivamus ac tincidu ut volutpat ligula finibus a. Maecenas
          ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget bibendum
          risus commodo. Nullam tristique nibh sed iaculis vulputate. Vivamus ac
          tincidu ut volutpat ligula finibus a. Maecenas ut pharetra ante. Nunc
          volutpat est eu odio vestibulum, eget bibendum risus commodo. Nullam
          tristique nibh sed iaculis vulputate. Vivamus ac tincidu ut volutpat
          ligula finibus a. Maecenas ut pharetra ante. Nunc volutpat est eu odio
          vestibulum, eget bibendum risus commodo. Nullam tristique nibh sed
          iaculis vulputate. Vivamus ac tincidu ut volutpat ligula finibus a.
          Maecenas ut pharetra ante. Nunc volutpat est eu odio vestibulum, eget
          bibendum risus commodo. Nullam tristique nibh sed iaculis vulputate.
          Vivamus ac tincidu
        </div>
      </div>
    </div>
  );
}
