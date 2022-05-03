import Image from 'next/image'
import { Grid, Paper, Typography } from '@mui/material'
import imageLoader from '../imageLoader'


const SanityData = ({ dgks }: any) => {

    return (
        <>

            {dgks.map((blog) =>
                <Typography key={blog.slug}>


                    <Paper
                        sx={{
                            margin: 'auto',
                            maxWidth: 1100,
                            flexGrow: 2,
                            marginTop: 3,
                            mariginRight: 5,
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={3}>
                            <Image src={blog.image} loader={imageLoader} alt="" height="250" width="450" />
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={4}>
                                    <Grid item sx={{ marginBottom: 2 }}>
                                        <Typography gutterBottom variant="subtitle1" component="h2">
                                            {blog.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                                            {blog.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Typography>
            )}

        </>
    )
}

export default SanityData

