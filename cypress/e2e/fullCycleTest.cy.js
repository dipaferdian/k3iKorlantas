import stepPetugas from "./filterPetugas/stepPetugas"
import stepPolda from "./filterPolda/stepPolda"

class fullCycleTest {

  static run() {

    stepPetugas.call()
    stepPolda.call()
    stepPolda.call()
  }
}

export default fullCycleTest.run()