#!/bin/bash
USERNAME=$(whoami)
cd "./to_appdata/Octagon Modmaking Studio/Data/langs"
cp -v ru.omslang en.omslang "C:/Users/$USERNAME\AppData\Roaming\Octagon Modmaking Studio\Data\langs"
