using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Forms;
using System.Xml;
using System.IO;

namespace Octagon.Workers
{
    // Util class: File
    public class OMSFile
    {
        // Starting window for choosing of folder on computer
        public static string FindFolder()
        {
            string folder = "";
            FolderBrowserDialog currentFolder = new FolderBrowserDialog();

            if (currentFolder.ShowDialog() == DialogResult.OK)
            {
                folder = currentFolder.SelectedPath;
                currentFolder.Dispose();
            }

            return folder;
        }

        // Checking capacity and access for necessary partition
        public static void CheckCapacity(string partition, long size)
        {
            dynamic MESSAGES = octagon_studio.App.language.CREATE_PROJECT.PROCESS;

            DriveInfo partInfo = new DriveInfo(partition);
            bool status = partInfo.IsReady;

            try
            {
                if (!status)
                {
                    throw new Exception(MESSAGES.ERROR__DISK_NOT_READY);
                }

                status = partInfo.AvailableFreeSpace >= size;

                if (!status)
                {
                    throw new Exception(MESSAGES.ERROR__NOT_ENOUGH_SPACE);
                }
            } catch(Exception e)
            {
                MessageBox.Show(e.Message);
            }
        }
    }
}